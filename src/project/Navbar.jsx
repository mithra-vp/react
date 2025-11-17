import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen)
  return (
    <nav>
        {/* logo */}
        <NavLink to='/' className="logo">
    MyPortfolio
        </NavLink>

        {/* hamburger menu icon */}

        <div className='menu-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        {/* navlinks */}

        <ul className={menuOpen ? "show" : ""}>
            {/* home */} 
            <li>
                <NavLink to='/' className={({ isActive }) => (isActive ? "active": "")}
                onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>
            </li>
            {/* about */}
            <li>
                <NavLink to='/about'  className={({ isActive }) => (isActive ? "active": "")} onClick={() => setMenuOpen(false)}>
                    About
                </NavLink>
            </li>
            {/* services */}
            <li>
                <NavLink to='/contact'  className={({ isActive }) => (isActive ? "active": "")} onClick={() => setMenuOpen(false)}>
                   Contact Us
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
