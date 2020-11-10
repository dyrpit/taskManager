import React from 'react';
import './SideBar.css';

const SideBar = ({ switchList, show }) => {
  return (
    <div className='sidebar-wrapper'>
      <button
        onClick={() => switchList('')}
        className='sidebar-wrapper-button'
        disabled={!show ? true : false}
      >
        Done
      </button>
      <button
        onClick={() => switchList('active')}
        className='sidebar-wrapper-button'
        disabled={show ? true : false}
      >
        Active
      </button>
    </div>
  );
};

export default SideBar;
