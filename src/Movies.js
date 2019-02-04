import React from 'react';
import RouteButton from './RouteButton.js';
import SearchMovie from './SearchMovie';
import Movie from './Movie.js';

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            movies:[]
        }
    }

    setId = (evt) => {
        this.setState({ id: evt.target.value })
    }

    getMovies = (data) => {
        this.setState({movies:data.results});
    }

    render() {

        return (

            <div>
                <h1>In Movies</h1>

                <SearchMovie getMovies={this.getMovies}/>

                {(this.state.movies != 0) && <h1>found {this.state.movies.length} Movies</h1>}

                {
                    this.state.movies.map((movie,index) => <Movie movie={movie} key={index}/>)
                }

                <br />

                id: <input type="text" onChange={this.setId} />

                <RouteButton value="Details" pathname="/moviedetails" data={this.state.id} />

            </div>


        )
    }

}

export default Movies;