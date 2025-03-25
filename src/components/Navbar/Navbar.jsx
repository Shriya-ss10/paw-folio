import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  
  const closeMenu = () => setToggleMenu(false);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex' onClick={closeMenu}>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>PawFolio</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "var(--black-color)" : "var(--black-color)"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeMenu}>Home</Link>
            </li>  
            <li className='nav-item'>
              <Link to="search" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeMenu}>Search</Link>
            </li>
            <li className='nav-item'>
              <Link to="favorites" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeMenu}>Favorites</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeMenu}>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar