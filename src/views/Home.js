import React, { useEffect } from 'react'
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { searchCharacters, startCharacters } from '../actions/favActions';
import Character from '../components/Character';


const Home = ({ characters }) => {

    const [input, setInput] = useState('')
    const [loader, setLoader] = useState({
        loading: 'Loading...',
        alert: 'success',
        reset: false
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCharacters()) //Al renderizar por primera vez traigo los characters 
    }, [])

    useEffect(() => {
        if (input.length === 0) {
            dispatch(startCharacters()) //si vacio el input manualmente ne trae los characters
            setLoader({
                ...loader,
                reset: false
            })
        }
    }, [input])

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchCharacters(input)) //Al hacer submmit mando al action el character indicado para traerlo con el fetch
        setLoader({
            loading: 'No character found',
            alert: 'danger',
            reset: true
        })
    }

    return (
        <div className='home-container animate__animated animate__fadeIn'>
            <div className='form-container'>
                <div className='logo-container'></div>
                <form className='form d-flex form' onSubmit={handleSubmit}>
                    {
                        loader.reset &&
                        <button className='animate__animated animate__fadeIn btn btn-primary btn-danger clear' onClick={() => {
                            setInput('') //vacio el input
                            setLoader({
                                loading: 'Loading...',
                                alert: 'success',
                                reset: false
                            })
                        }}>X</button>
                    }
                    <input
                        className='form-control me-2 input'
                        type="text"
                        placeholder="Search by character..."
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button className='btn-search' type='submit'>Search</button>
                </form>
            </div>
            {
                //console.log(characters.characters)
            }
            {
                characters.characters.length > 0 ? //si hay characters en el arreglo de mi state procedo
                    characters.characters.map((character, i) => (
                        <Character
                            character={character}
                            key={i}
                        />
                    ))
                    :
                    <div className={`nofound alert alert-${loader.alert}`}>
                        {loader.loading}
                        <div className="spinner spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.select
    }
}

export default connect(mapStateToProps, null)(Home)