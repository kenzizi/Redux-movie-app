import { SET_TITLE_FILTER,ADD_MOVIE,SET_RATING_FILTER } from '../constants/actionsTypes';

export const setTitleFilter = (payload) => {
    return { type: SET_TITLE_FILTER, payload}
}

export const AddMovie = (payload)=> {
    return { type: ADD_MOVIE, payload }

}
export const setRatingFilter = (payload) => {
    return { type: SET_RATING_FILTER, payload}
}