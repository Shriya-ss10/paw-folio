import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.png";
import logoImg from "../../images/logo.png";
import { FaBook, FaHeart, FaSearch, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <div className='about-header'>
          <img src={logoImg} alt="PawFolio Logo" className='about-logo animate-float' />
          <h1 className='about-main-title'>About PawFolio જ⁀➴</h1>
        </div>

        <div className='about-content grid'>
          <div className='about-img animate-fade-in'>
            <img src={aboutImg} alt="About PawFolio" />
          </div>
          
          <div className='about-text animate-fade-in-delay'>            
            <div className='about-description'>
              <p className='about-title'><b>Your Cozy Reading Companion ᨐฅ</b></p>
              <p>Whether you're looking for a new book to read, searching for details about a favorite title, or just exploring, PawFolio makes it easy to find the information you need. 🕮</p>
              <p>With a simple and user-friendly experience, you can browse book details, star your favorites, and more—all in one place. ⚯ ͛</p>
              <p>So, curl up, explore, and let PawFolio help you find your next literary adventure! ✧</p>
            </div>
          </div>

          <div className='features-list animate-fade-in-delay'>
            <div className='feature-item'>
              <FaBook className='feature-icon' />
              <span>Extensive Book Collection</span>
            </div>
            <div className='feature-item'>
              <FaSearch className='feature-icon' />
              <span>Easy Search & Navigation</span>
            </div>
            <div className='feature-item'>
              <FaStar className='feature-icon' />
              <span>Star Your Favorites</span>
            </div>
            <div className='feature-item'>
              <FaHeart className='feature-icon' />
              <span>User-Friendly Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;