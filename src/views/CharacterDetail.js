import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharactersDetail } from '../actions/favActions'
import Character from '../components/Character'

const CharacterDetail = () => {

    const state = useSelector(state => state.select)

    const params = useParams();
    const dispatch = useDispatch()


   /*  console.log(params.character)
    console.log(state.characters[0].character) */
    useEffect(() => {
        dispatch(getCharactersDetail(params.character))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='detail-container'>
            {
                state.characters[0].character === params.character ? //si hay characters en el arreglo de mi state procedo
                    state.characters.map((character, i) => (
                        <Character
                            character={character}
                            key={i}
                            detail={true}
                        />
                    ))
                    :
                    <div className={`nofound alert alert-success`}>
                        Loading...
                        <div className="spinner spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CharacterDetail