import {SET_DATA, SET_CURRENT_ID, SET_FILTERED_DATA} from '../actions/mapViewActions'
import {Place} from '../dataProvider'

type StateType = {
    data: Array<Place>
    filteredData: Array<Place>
    currentId: number 
}

const initialState: StateType = {
    data: [],
    filteredData: [],
    currentId: 0,
}


export function mapViewReducer(state : StateType = initialState, action: any) : StateType {
    switch (action.type) {
    case SET_DATA:
        return { ...state, data: action.payload}
    case SET_FILTERED_DATA:
        return { ...state, filteredData: action.payload}
        case SET_CURRENT_ID:
            return { ...state, currentId: action.payload}
    default:
        return state
    }
}




