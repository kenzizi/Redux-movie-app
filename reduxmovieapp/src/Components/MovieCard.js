import React from 'react'
import Rating from './Ratingbar'

const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        title = '',
        year = '',
        image = 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png',
        rating = 0
    } = movie
    return (
        <div className="movie-card">
            <div className="movie-rating"><Rating count={rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${image}')`
                }}
            />
            <div className="movie-description">{title} - {year}</div>
            </div>
    )
}

export default MovieCard