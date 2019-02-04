import React from 'react';
import Demo from './demo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[]
        }
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(data) {
        this.setState({movies:data.results});
    }

    render() {
      return (
        <div className="App">
            <Search getMovies = {this.getMovies}/>
            <Movies movies = {this.state.movies} />
        </div>
        
      );
    }
  }


class Movies extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <h1>Movies</h1>
            {
                (this.props.movies.length != 0) && <Demo movies={this.props.movies}/>
            }
            </div>
        )

    }
}

const Movie = (props) => {
    const path = "http://image.tmdb.org/t/p/w185" + props.movie.poster_path;
    return (
        <div>
            <span>{props.movie.title}</span>
            <img src = {path} />
        </div>
    )
}

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: null,
        }
        this.getText = this.getText.bind(this);
        this.SearchMovie = this.Search.bind(this);
}

getText(evt) {
        this.setState({txt: evt.target.value});
}


Search() {
    const api_key = '161d130b6575207c8c50e85fd94ac56d';
    let url = 'http://api.themoviedb.org/3/';
    const mode = 'search/movie?query=';
    const movieName = '&query=' + encodeURI(this.state.txt);
    const key = '&api_key=' + api_key;

    url = url + mode + key + movieName;

    fetch(url)
      .then(response => response.json())
      .then(data => this.props.getMovies(data));
  }

    render() {
        return(
            <div>
                <input type="text" placeholder="enter movie name here" onChange={this.getText}></input>
                <button onClick={this.Search}>Search!</button>
            </div>
        )
    }
  }



  export default App;