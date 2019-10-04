import React from 'react';
import styled from 'styled-components';

interface Props {
  bold?: boolean;
}

const Link = styled.a<Props>`
  color: navy;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  :active,
  :hover {
    text-decoration: none;
  }
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
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
        <Link href='/' data-test='component-Link'>
          Home
        </Link>
        <Link href='/about' data-test='component-Link'>
          About
        </Link>
        <Link href='/logout' data-test='component-Link' bold>
          Logout
        </Link>
      </NavbarWrapper>
    </div>
  );
};

export default Navbar;
