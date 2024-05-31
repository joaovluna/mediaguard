import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo_index.png';
import menu_icon from '../../assets/icons8-menu.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mov, setMov] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [menu, setMenu] = useState('signUp');
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setMov(true) : setMov(false);
    });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    if (index === 4) {
      setMenu('signup');
    } else if (index === 5) {
      setMenu('login');
    }else {
      setActiveIndex(index);
      setMenu('home');
    }
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${mov ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li className={activeIndex === 0 ? 'active' : ''}>
          <ScrollLink to='hero' smooth={true} offset={0} duration={500} onClick={() => handleClick(0)}>
            <RouterLink to='/home'>Inicio</RouterLink>
          </ScrollLink>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''}>
          <ScrollLink to='premium' smooth={true} offset={-360} duration={500} onClick={() => handleClick(1)}>
            <RouterLink to='/home'>Premium</RouterLink>
          </ScrollLink>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''}>
          <ScrollLink to='about' smooth={true} offset={-260} duration={500} onClick={() => handleClick(2)}>
            <RouterLink to='/home'>Sobre</RouterLink>
          </ScrollLink>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''}>
          <ScrollLink to='contact' smooth={true} offset={0} duration={500} onClick={() => handleClick(3)}>
            <RouterLink to='/home'>Contate-nos</RouterLink>
          </ScrollLink>
        </li>
        <li>
          <RouterLink to='/signup'>
            <button className={`btn ${menu === 'signup' ? 'active' : ''}`} onClick={() => handleClick(4)}>
              <strong>Sign Up</strong>
            </button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to='/login'>
            <button className={`btn ${menu === 'login' ? 'active' : ''}`} onClick={() => handleClick(5)}>
              <strong>Login</strong>
            </button>
          </RouterLink>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
