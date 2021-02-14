import {combineReducers} from 'redux'
import {mapViewReducer} from './mapViewReducer'



export const rootReducer = combineReducers({
    mapView: mapViewReducer,
})

type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;