import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: lightslategray;
`;

const Link = styled.a`
  color: navy;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

const Footer = () => {
  return (
    <div data-test='component-Footer'>
      <FooterWrapper>
        <Link>Legal</Link>
        <Link>Twitter</Link>
        <Link>ToS</Link>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
