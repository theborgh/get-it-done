import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: navy;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

const NavbarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: lightslategray;
`;

const Navbar = () => {
  return (
    <div data-test='component-Navbar'>
      <NavbarWrapper>
        <Link data-test='component-Link'>Home</Link>
        <Link data-test='component-Link'>About</Link>
        <Link data-test='component-Link'>Logout</Link>
      </NavbarWrapper>
    </div>
  );
};

export default Navbar;
