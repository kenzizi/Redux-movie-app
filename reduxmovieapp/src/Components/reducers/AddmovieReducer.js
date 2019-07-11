import { ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE } from '../constants/actionsTypes';


const moviesReducer = (state = [], action) => {
    if(action.type === ADD_MOVIE) {
        return state.concat(action.payload)
    }
    // if(action.type === EDIT_MOVIE) {
    //     return state.map(m => {
    //         if(m.id === action.id) {
    //             return action.movie
    //         }
    //         return m
    //     })
    // }


        return state
    }


    export default moviesReducer