import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  

  return (
    <div>
      <div className="logo">Synergy</div>
      
      <div className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="login">
        <button>Login</button>
      </div>

    </div>
  )
}

export default Navbar
