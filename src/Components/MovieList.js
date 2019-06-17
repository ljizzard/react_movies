import React from 'react';
import Movie from './Movie'

function MovieList(props){

  const MovieNodes = props.data.map((movie) => {
    return (
      <Movie name= {movie.name} url={movie.url} key={movie.id} />

    )
  })

  return(
    <div>
    {MovieNodes}

    <a href="https://www.imdb.com/calender/?region=gb">
      <input type="button" value="See More" />
    </a>
    </div>
  )

}
export default MovieList;
