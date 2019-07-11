import React from 'react'
import Rating from './Ratingbar'
import {connect} from 'react-redux'
import {setRatingFilter} from './Actions/action'

const TopRatingbar = ({onChange=()=>{}, count =1}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)
            
const mapStateToProps = state => { // 9olna lel count eli rak dima ebch thez valeur mta3ek mel state 
    return {
        count: state.ratingFilter // lena khalina count te5o value ta state dima
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        onChange : (newRating) => {
            dispatch(setRatingFilter(newRating))   
        }
    }
}

const RatingFilterContainer = 
    connect(mapStateToProps,mapDispatchToProps)(TopRatingbar)



export default RatingFilterContainer