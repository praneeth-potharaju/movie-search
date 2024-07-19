import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.key} 
          title={movie.title} 
          author={movie.author_name ? movie.author_name.join(', ') : 'Unknown'} 
          publishDate={movie.first_publish_year || 'N/A'} 
        />
      ))}
    </div>
  );
};

export default MovieList;
