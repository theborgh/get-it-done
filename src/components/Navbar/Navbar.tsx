import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar' data-test='component-Navbar'>
      <Link className='Navbar-link' to='/' data-test='component-Link'>
        Home
      </Link>
      <Link className='Navbar-link' to='/about' data-test='component-Link'>
        About
      </Link>
      <Link className='Navbar-link' to='/logout' data-test='component-Link'>
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
