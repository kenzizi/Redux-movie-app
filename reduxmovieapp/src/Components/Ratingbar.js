import React from 'react'
import {connect} from 'react-redux'



const Ratingbar = ({count, onChangeRating = () => {}}) => {
    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            stars.push(<span onClick={() => onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span onClick={() => onChangeRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{stars}</div>
    )
}

export default Ratingbar