import React from 'react';

import Button from '../Button/Button';

import './SideBar.css';

const SideBar = ({ switchList, show }) => {
  const isDisabled = show ? true : false;

  return (
    <div className='sidebar-wrapper'>
      <Button
        buttonStyle='sidebar'
        isDisabled={!isDisabled}
        onClickHandler={() => switchList(!show)}
        title='done'
      />
      <Button
        buttonStyle='sidebar'
        isDisabled={isDisabled}
        onClickHandler={() => switchList(!show)}
        title='active'
      />
    </div>
  );
};

export default SideBar;
