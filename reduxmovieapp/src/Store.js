import {createStore, combineReducers} from 'redux'
import titleFilterReducer from './Components/reducers/titleFilterReducer'
import MoviesReducer from './Components/reducers/AddmovieReducer'
const ratingFilterReducer = (state = 0, action) => {
    if(action.type === 'SET_RATING_FILTER') {
        return action.payload
    }
    return state
}


const store = createStore(combineReducers({
    movieList: MoviesReducer,
    ratingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
})
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store
