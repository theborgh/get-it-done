import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.scss';

interface Project {
  name: string;
}

const Sidebar = ({projects}: {projects: Project[]}) => {
  return (
    <div className='Sidebar' data-test='component-Sidebar'>
      <div className='Sidebar-section'>
        Capture
        <NavLink
          to='/inbox'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Inbox
        </NavLink>
      </div>

      <div className='Sidebar-section'>
        Actions
        <NavLink
          to='/next'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Next
        </NavLink>
        <NavLink
          to='/waiting'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Waiting
        </NavLink>
        <NavLink
          to='/scheduled'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Scheduled
        </NavLink>
        <NavLink
          to='/someday'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Someday
        </NavLink>
      </div>

      <div className='Sidebar-section'>
        Focus
        <NavLink
          to='/today'
          className='Sidebar-menuitem'
          activeClassName='Sidebar-activelink'
        >
          Today
        </NavLink>
      </div>

      <div className='Sidebar-section'>
        Projects
        {projects.map(project => (
          <div className='Sidebar-menuitem'>{project.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
