import React from 'react';

function Movie (props){
  return(
    <div>
    <h4>{props.id}</h4>
    <h4>{props.name}</h4>
    <h4>{props.url}</h4>
    </div>

  )

}
export default Movie;
