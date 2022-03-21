import React, { useEffect } from 'react'
import { useState } from 'react';
import Character from '../components/Character';

const Home = () => {

    const [ data, setData ] = useState([])
    const [ char, setChar ] = useState('https://thesimpsonsquoteapi.glitch.me/quotes?count=30')
    const [ loading, setLoading ] = useState('Loading...')

    useEffect(() => {
        handleCharacters()
    }, [char])

    const url = char //url del state predeterminada

    const handleCharacters = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setData(data) }) //guardo la data que retorna en el estado
    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        let character = e.target.value
        if ( character.length === 0 ) { 
            setLoading('Loading...')
            setChar('https://thesimpsonsquoteapi.glitch.me/quotes?count=30')
        } //si el input esta vacio url = original
        setLoading('No character found')
        setChar(`https://thesimpsonsquoteapi.glitch.me/quotes?count=30&character=${character}`) //cambio el state por la url con el character que deseo buscar
    }

    return (
        <div className='home-container animate__animated animate__fadeIn'>
            <div className='form-container'>
                <h1>Simpsons quotes</h1>
                <form className='d-flex form'>
                    <input 
                        className='form-control me-2 input' 
                        type="text" 
                        placeholder="Search by character..." 
                        onChange={ handleInputChange }
                    />
                </form>
            </div>
            {
                data.length > 0 ?
                data.map((character, i) => (
                    <Character
                        character={character}
                        key={i}
                    />
                ))
                :
                <div className='nofound'>{ loading }</div>
            }
        </div>
    )
}

export default Home