import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import MovieList from './components/MovieList/MovieList';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  };

  handleSearch = (query) => {
    if (!query) return;
    
    this.setState({ isLoading: true, error: null });
    
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const movies = data.docs.map(doc => ({
          key: doc.key,
          title: doc.title,
          author_name: doc.author_name,
          first_publish_year: doc.first_publish_year,
        }));
        this.setState({ movies, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div className="app">
        <h1 className="app-title">Movie Search App</h1>
        <SearchBar onSearch={this.handleSearch} />
        {isLoading && <div className="loading-spinner"></div>}
        {error && <div className="error-message">Something went wrong. Please try again.</div>}
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
