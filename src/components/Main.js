import React from 'react';
import {
  Link
} from "react-router-dom"
import '../App.css';

function Main(props) {
  if (props.movie !== null) {
    return (
      <div className="Main">
        <div className="card" style={{'width': '18rem'}}>
          <img className="card-img-top" src={props.movie.Poster} alt="Movie poster" />
          <div className="card-body">
            <Link to={`/movie/${props.movie.imdbID}`} className="card-title card-title-link">Title: {props.movie.Title}</Link>
            <p className="card-text">Released: {props.movie.Released}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Main