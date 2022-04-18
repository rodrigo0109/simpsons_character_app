import { types } from "../types/types";


const initialState = {
    characters: [],
    fav: []
}

export const favReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.getCharacters:
            return {
                ...state,
                characters: action.payload
            }

        case types.searchCharacter:
            return {
                ...state,
                characters: action.payload
            }

        case types.getCharacterDetail:
            return {
                ...state,
                characters: action.payload
            }

        case types.selectFav:
            return {
                ...state,
                fav: [...state.fav, action.payload] //state anterior + payload
            }

        case types.deleteFav:
            return {
                ...state, //conservo los characters
                fav: state.fav.filter(char => char !== action.payload) //filtro el state segun el payload que me llega
            }

        case types.deleteAll:
            return {
                ...state, //conservo los characters
                fav: initialState.fav //estado inicial = []
            }

        default:
            return state;
    }

}