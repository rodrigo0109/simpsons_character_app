import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAdd, startDelete } from '../actions/favActions';
import '../App.css'

const Character = ({ character, check, detail }) => {

  //console.log(character.character)

  const dispatch = useDispatch();

  const handleClickFav = (char) => {
    //console.log('hola',char)
    dispatch(startAdd(char))

  }

  const handleDelete = (char) => {
    dispatch(startDelete(char))
  }

  return (
    //para que no de error al renderizar le pongo ? (si character es recibido como param procedo)
    <div className="character-container animate__animated animate__fadeIn">
      <h1>{character?.character}</h1>
      <img src={character ? character.image : ''} alt={character ? 'a' : ''} className="card-img" />
      <p>{character?.quote}</p>
      {
        check ?
          <button className='btn-delete' onClick={() => handleDelete(character)} >Delete</button>
          :
          <button className='btn-select' onClick={() => handleClickFav(character)} >Add to fav</button>
      }
      {
        !detail &&
        <Link className='btn btn-light' to={`/character/${character.character}`} >See more</Link>
      }
    </div>
  )
}

export default Character