import { types } from '../types/types'


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