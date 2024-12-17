import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
          <li><a href="#follow" className="nav-item">Follow</a></li>
        </ul>
        
        <div className="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

  )
}

export default Navbar
