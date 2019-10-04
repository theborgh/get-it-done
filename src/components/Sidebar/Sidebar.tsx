import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.section`
  background-color: violet;
  position: fixed;
  left: 0;
  height: 100%;
  width: 14rem;
`;

const SidebarSection = styled.section`
  width: 100%;
  background-color: pink;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const MenuItem = styled.a`
  display: block;
  background-color: lightpink;
  font-weight: normal;
`;

const Sidebar = () => {
  return (
    <div data-test='component-Sidebar'>
      <SidebarWrapper>
        <SidebarSection>
          Capture
          <MenuItem>Inbox</MenuItem>
        </SidebarSection>
        <SidebarSection>
          Actions
          <MenuItem>Next</MenuItem>
          <MenuItem>Waiting</MenuItem>
          <MenuItem>Scheduled</MenuItem>
          <MenuItem>Someday</MenuItem>
        </SidebarSection>
        <SidebarSection>
          Focus
          <MenuItem>Today</MenuItem>
        </SidebarSection>
        <SidebarSection>
          Projects
          <MenuItem>Project #1</MenuItem>
          <MenuItem>Project #2</MenuItem>
          <MenuItem>Project #3</MenuItem>
        </SidebarSection>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
