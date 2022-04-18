import { types } from '../types/types'


export const startCharacters = () => dispatch => {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=30')
        .then( res => res.json() )
        .then( data => {
            dispatch({
                type: types.getCharacters,
                payload: data
            })
        } )
}

export const searchCharacters = (char) => dispatch => {
    return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=30&character=${char}`)
        .then( res => res.json() )
        .then( data => {
            dispatch({
                type: types.searchCharacter,
                payload: data
            })
            //console.log(data)
        } )
}

export const getCharactersDetail = (char) => dispatch => {
    return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=30&character=${char}`)
        .then( res => res.json() )
        .then( data => {
            dispatch({
                type: types.getCharacterDetail,
                payload: data
            })
            //console.log('detail',data)
        } )
}

export const startAdd = (param) => {
    return ( dispatch ) => {
    
        dispatch( add(param) )
        
    }
}

const add = (param) => ({ 
    type: types.selectFav, 
    payload: param
})

export const startDelete = (char) => {
    return ( dispatch ) => {

        dispatch( remove(char) )

    }
}

const remove = (char) => ({ 
    type: types.deleteFav, 
    payload: char 
})

export const startDeleteAll = () => {
    return ( dispatch ) => {

        dispatch( removeAll() )

    }
}

const removeAll = () => ({ type: types.deleteAll })