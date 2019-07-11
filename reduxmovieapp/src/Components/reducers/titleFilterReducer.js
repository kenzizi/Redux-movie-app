import {SET_TITLE_FILTER} from '../constants/actionsTypes'

const titleFilterReducer = (state = '', action) => {
    if(action.type === SET_TITLE_FILTER) {
        return action.payload
    }
    return state
}

export default titleFilterReducer