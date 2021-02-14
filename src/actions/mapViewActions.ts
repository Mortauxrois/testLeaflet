import {Place} from '../dataProvider'
import { Dispatch } from 'redux';
export const SET_DATA = 'mapView/SET_DATA';
export const SET_FILTERED_DATA = 'mapView/SET_FILTERED_DATA';
export const SET_CURRENT_ID = 'mapView/SET_CURRENT_ID';


export function setData(d: Array<Place>) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: SET_DATA,
            payload: d
        });
        dispatch({
            type: SET_FILTERED_DATA,
            payload: d
        });
    }
}


type setFilteredDataType = {type: typeof SET_FILTERED_DATA
    payload: Array<Place>
}
export function setFilteredData(d: Array<Place>) : setFilteredDataType {
    return({
        type: SET_FILTERED_DATA,
        payload: d
    });
}


type setCurrentIdDataType = {type: typeof SET_CURRENT_ID
    payload: number
}
export function setCurrentId(d: number) : setCurrentIdDataType {
    return({
            type: SET_CURRENT_ID,
            payload: d
        });
}