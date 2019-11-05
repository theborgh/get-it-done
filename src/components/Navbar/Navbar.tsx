import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar' data-test='component-Navbar'>
      <a className='Navbar-link' href='/' data-test='component-Link'>
        Home
      </a>
      <a className='Navbar-link' href='/about' data-test='component-Link'>
        About
      </a>
      <a className='Navbar-link' href='/logout' data-test='component-Link'>
        Logout
      </a>
    </div>
  );
};

export default Navbar;
