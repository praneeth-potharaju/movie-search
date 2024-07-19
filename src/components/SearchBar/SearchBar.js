import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input 
          type="text" 
          value={this.state.query} 
          onChange={this.handleChange} 
          placeholder="Search for movies..." 
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    );
  }
}

export default SearchBar;
