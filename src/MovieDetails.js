import React from 'react'

class MovieDetails extends React.Component{
    render() {
        return(
            <div>
                <h1>In movie details, the id is {this.props.location.data}</h1>
            </div>
        )
    }
}

export default MovieDetails;