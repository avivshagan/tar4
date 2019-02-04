import React from 'react';

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: null,
            error: null
        }
        this.getText = this.getText.bind(this);
        this.Search = this.Search.bind(this);
}

getText(evt) {
        this.setState({txt: evt.target.value});
}


handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

Search() {
    const api_key = '161d130b6575207c8c50e85fd94ac56d';
    let url = 'http://api.themoviedb.org/X/';
    const mode = 'search/movie?query=';
    const movieName = '&query=' + encodeURI(this.state.txt);
    const key = '&api_key=' + api_key;

    url = url + mode + key + movieName;

    fetch(url)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(data  => this.props.getMovies(data))
      .catch(error => this.setState({error:"There was an error in getting the movie"}));
  }

    render() {
        return(
            <div>
                <input type="text" placeholder="enter movie name here" onChange={this.getText}></input>
                <button onClick={this.Search}>Search!</button>
                {this.state.error && <h3> {this.state.error}</h3>}
            </div>
        )
    }
  }

  export default SearchMovie;