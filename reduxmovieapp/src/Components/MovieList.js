import React from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
import {AddMovie} from './Actions/action'

class MovieList extends React.Component {
    state = {
        title: '',
        rating: '',
        year: ''
    }

    handleChange = ( event ) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        const {movies, onAddMovie, ratingFilter, titleFilter} = this.props;
        console.log("zied",this.props)
        return (
            <div className="movie-list">
            {
                movies
                .filter( el =>
                        el.rating >= ratingFilter
                        &&
                        el.title.toLowerCase().includes(titleFilter.toLowerCase().trim())
                    )
                    .map((el, id) => <MovieCard key={id} movie={el} />)
            }
            <input name='title' onChange={this.handleChange} value={this.state.title}/>
            <input name='rating' onChange={this.handleChange} value={this.state.rating}/>
            <input name='year' onChange={this.handleChange} value={this.state.year}/>
            <div
                className="new-movie-card"
                onClick={()=>onAddMovie(this.state)}>   
                +
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movieList,
        ratingFilter: state.ratingFilter,
        titleFilter:state.titleFilter
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddMovie: (newMovie) => {
            dispatch(AddMovie(newMovie))
        }
    }
}

const MovieListContainer = connect(mapStateToProps,mapDispatchToProps)(MovieList)

export default MovieListContainer