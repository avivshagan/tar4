import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const path = "http://image.tmdb.org/t/p/w185" + props.movie.poster_path;
    return (
        <div>
            <span>{props.movie.title}</span>
            <img src = {path} className='movieImg' />
        </div>
    )
}

export default Movie;