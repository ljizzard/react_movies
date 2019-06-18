import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

  const movieNodes = props.data.map((movie) => {
    return (
      <Movie name= {movie.name} url={movie.url} key={movie.id} />)
  })

  return(
    <div>
    {movieNodes}

    <a href="https://www.imdb.com/calendar/?region=gb">
      <input type="button" value="See More" />
    </a>
    </div>
  );

}
export default MovieList;
