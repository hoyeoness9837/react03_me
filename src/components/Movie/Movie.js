import React from 'react';

const Movie = (props) => {
  return (
    <div>
      <img src={props.movie.Poster} alt='movie' />
      <h1>{props.movie.Title}</h1>
      <h2>Directed by {props.movie.Director}</h2>
      <p>{props.movie.Plot}</p>
    </div>
  );
};

export default Movie;
