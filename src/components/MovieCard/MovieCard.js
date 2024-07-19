import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  state = {
    dogImage: ''
  };

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ dogImage: data.message }));
  }

  render() {
    const { title, author, publishDate } = this.props;
    const { dogImage } = this.state;

    return (
      <div className="movie-card">
        <img src={dogImage} alt="Random dog" className="dog-image" />
        <div className="movie-details">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-author">Author: {author}</p>
          <p className="movie-publish-date">Publish Date: {publishDate}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
