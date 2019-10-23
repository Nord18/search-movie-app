import React from 'react';
import '../App.css';

function Header(props) {
  return (
    <div className="Header">
      <form className="form" onSubmit={props.searchMovie}>
        <input value={props.value} onChange={props.handleChange} className="form-control form-control-lg field" type="text" placeholder="search movie" />
        <button className="btn btn-light">Search</button>
      </form>
    </div>
  )
}

export default Header