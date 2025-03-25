import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { FaPaw } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
              <div className='search-content'>
                  <div className='search-welcome animate-fade-in'>
                    <FaPaw className='paw-icon' />
                    <h2>Find Your Next Reading Adventure ✧</h2>
                    <p>Curl up and discover your next favorite read among millions ᨐ</p>
                  </div>
              </div>          
              <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header