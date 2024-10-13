import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <div className='header'>
      <Link to= "/" className='title'>My Quiz App</Link>
      <hr className='divider'/>
    </div>
  )
}

export default Header