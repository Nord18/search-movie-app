import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Movie from './components/Movie'
import {
  Route,
  HashRouter
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      movie: null
    }
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value
    })
  };

  searchMovie = (evt) => {
    evt.preventDefault();

    const getMovie = async () => {
      const response = await fetch(`http://www.omdbapi.com/?t=${this.state.value}&apikey=51b5804a`);

      const data = await response.json();

      if (data.Response === 'True') {
        this.setState(state => ({
          movie: data
        }))
      } else {
        alert('Movie not found!')
      }
    };

    getMovie();

    this.setState({
      value: ''
    })
  };

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/">
            <Header value={this.state.value} searchMovie={this.searchMovie} handleChange={this.handleChange} />
            <Main movie={this.state.movie} />
          </Route>
          { this.state.movie !== null &&
            <Route path="/movie/:id">
              <Movie movie={this.state.movie} />
            </Route>
          }
        </HashRouter>
      </div>
    )
  }
}

export default App;
