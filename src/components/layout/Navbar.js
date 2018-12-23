import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="navbar-fixed">
      <nav class="nav-wrapper">
        <div class="container">
          <Link to='/' className="brand-logo">Workduler</Link>
          <ul class="right">
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='#'>Log Out</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
