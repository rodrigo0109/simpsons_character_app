import { combineReducers } from "redux";
import { favReducer } from "./favReducer";



export const rootReducer = combineReducers({
    select: favReducer
})