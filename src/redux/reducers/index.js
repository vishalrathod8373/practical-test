import { combineReducers } from "redux";
import { todoReducers } from "./todoReducers";


const reducers = combineReducers({
    allTodo: todoReducers
})

export default reducers