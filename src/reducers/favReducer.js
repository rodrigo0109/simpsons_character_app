import { types } from "../types/types";


const initialState = {
    fav: []
}

export const favReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.selectFav:
            return {
                ...state,
                fav: [...state.fav, action.payload]
            }

        case types.deleteFav:
            return {
                fav: state.fav.filter( char =>  char !== action.payload)
            }

        case types.deleteAll:
            return {
                fav: initialState.fav
            }

        default:
            return state;
    }

}