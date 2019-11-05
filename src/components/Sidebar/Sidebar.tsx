import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='Sidebar' data-test='component-Sidebar'>
      <div className='Sidebar-section'>
        Capture
        <div className='Sidebar-menuitem'>Inbox</div>
      </div>
      <div className='Sidebar-section'>
        Actions
        <div className='Sidebar-menuitem'>Next</div>
        <div className='Sidebar-menuitem'>Waiting</div>
        <div className='Sidebar-menuitem'>Scheduled</div>
        <div className='Sidebar-menuitem'>Someday</div>
      </div>
      <div className='Sidebar-section'>
        Focus
        <div className='Sidebar-menuitem'>Today</div>
      </div>
      <div className='Sidebar-section'>
        Projects
        <div className='Sidebar-menuitem'>Project #1</div>
        <div className='Sidebar-menuitem'>Project #2</div>
        <div className='Sidebar-menuitem'>Project #3</div>
      </div>
    </div>
  );
};

export default Sidebar;
