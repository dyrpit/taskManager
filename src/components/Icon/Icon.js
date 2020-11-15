import React from 'react';

import './Icon.css';

import { getLeftDays } from '../../services/sortService';

const Icon = ({ date }) => {
  let daysLeft = getLeftDays(date);
  let icon = '';
  let text = 'days left';

  if (daysLeft < 0) {
    icon = <i className='far fa-frown'></i>;
    daysLeft = Math.abs(daysLeft);
    text = 'days after deadline';
  } else if (daysLeft > 0) {
    icon = <i className='far fa-smile'></i>;
  } else {
    icon = <i className='far fa-meh'></i>;
  }

  return (
    <div className='tooltip'>
      {icon}
      <div className='tooltiptext'>
        {daysLeft} {text}
      </div>
      <div className='tooltiparrow'></div>
    </div>
  );
};

export default Icon;
