import React from 'react';
// import {
//   useParams
// } from "react-router-dom";
import '../App.css';

function Movie(props) {
  // let { id } = useParams();

  return (
    <div className="Movie">
      <div className="card" style={{'width': '18rem'}}>
        <img className="card-img-top" src={props.movie.Poster} alt="Movie poster" />
        <div className="card-body">
          <h5 to={`/${props.movie.imdbID}`} className="card-title">Title: {props.movie.Title}</h5>
          <p className="card-text">Released: {props.movie.Released}</p>
          <p className="card-text">Genre: {props.movie.Genre}</p>
          <p className="card-text">Director: {props.movie.Director}</p>
          <p className="card-text">Actors: {props.movie.Actors}</p>
          <a target="_blank" href={props.movie.Website} className="card-link">Website</a>
        </div>
      </div>
    </div>
  )
}

export default Movie