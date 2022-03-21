import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteAll } from '../actions/favActions';
import Character from '../components/Character';

const Fav = () => {

  const { fav } = useSelector(state => state.select);
  //console.log(fav)
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch( startDeleteAll() )
  }

  return (
    <div className='fav-container animate__animated animate__fadeIn'>
      <button onClick={ handleDeleteAll } className="btn btn-dark" >Delete All</button>
      {
        fav.length > 0 ? 
        fav.map((char, i) => (
          <Character
            character={char}
            check={ true } //prop que va determinar si el btn es de add o delete
            key={i}
          />
        ))
        : 
        <h1>No character selected</h1>
      }
    </div>
  )
}

export default Fav