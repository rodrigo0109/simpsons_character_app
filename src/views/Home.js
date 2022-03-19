import React, { useEffect } from 'react'
import { useState } from 'react';
import Character from '../components/Character';

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        handleCharacters()
    }, [])


    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=30'

    const handleCharacters = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setData(data) }) //guardo la data que retorna en el estado
    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className='home-container animate__animated animate__fadeIn'>
            <div className='form-container'>
                <h1>Search your Simpson´s character!</h1>
                <form className='d-flex form'>
                    <input 
                        className='form-control me-2 input' 
                        type="text" 
                        placeholder="Search..." 
                        onChange={ handleInputChange }
                    />
                    <button className="btn-search" type="submit" >Search</button>
                </form>
            </div>
            {
                data.map((character, i) => (
                    <Character
                        character={character}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export default Home