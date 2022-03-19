import React from 'react'
import { Link } from 'react-router-dom'
import '../App'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='nav'>

        <Link className='nav-link link' to="/">Home</Link>

        <Link className='nav-link link' to="/favoritos">Fav</Link>

        
      </nav>
    </div>
  )
}

export default Navbar