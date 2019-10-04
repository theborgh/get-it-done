import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.section`
  background-color: violet;
  position: fixed;
  left: 0;
  height: 100%;
  width: 14rem;
`;

const Sidebar = () => {
  return (
    <div data-test='component-Sidebar'>
      <SidebarWrapper>Sidebar</SidebarWrapper>
    </div>
  );
};

export default Sidebar;
