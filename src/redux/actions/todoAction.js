import jsonStoreApi from '../../helpers/api_helpers';
import { ActionTypes } from "../constants/actionTypes"

export const fetchTodo = () => async (dispatch) => {
    const response = await jsonStoreApi.get('todos');
   
    dispatch({ type: ActionTypes.FETCH_TODO, payload: response.data })
}
