import './App.css';
import Home from './components/Home.jsx';





function Navbar() {
  return (
    <div className="Navbar">
      <header className="Navbar-header">
        <marquee behavior="scroll" direction="right">Welcome to Synergy!</marquee>
      </header>

      <div className="menu">
        <ul>
          <li><a link to="Home.jsx">Home</a></li>
          <li><a link to="about">About</a></li>
          <li><a link to="contact">Contact</a></li>
          <li><a link to="services">Services</a></li>
        </ul>
      </div>
      
      
      
      <div className="login">
        <button>Login</button>
      </div>

    </div>
  );
}

export default Navbar;