import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='logo-name'>Kripsy.IO</div>
        <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/start">Start</Link>
      </li>
    
    </ul>
    </nav>
  )
}

export default Nav