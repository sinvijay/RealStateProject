import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className='head'>
        <marquee behavior="scroll" direction="left" width= '400px'>
            This Website is under maintenance.
        </marquee>
      </div>
      <NavLink className="logo" to="/">Synergy</NavLink>
      
      <div className="menu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      
      
      <div className="login">
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="Signup">
        <NavLink to="/signup">Signup</NavLink>
      </div>


      <Outlet />
    </div>
  )
}

export default Navbar
