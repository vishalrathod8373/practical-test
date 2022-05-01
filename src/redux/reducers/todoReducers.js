import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    todo: []
}


export const todoReducers = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.FETCH_TODO:
            return { ...state, todo: payload }
        default:
            return state
    }


}