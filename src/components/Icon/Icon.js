import React from 'react';

import './Icon.css';

const Icon = ({ date }) => {
  const endDateTime = new Date(date).getTime();
  const currentTime = Date.now();
  const day = 1000 * 60 * 60 * 24;

  const result = endDateTime - currentTime;
  const daysLeft = Math.ceil(result / day);
  let icon = '';

  if (daysLeft < 0) {
    icon = <i class='far fa-frown'></i>;
  } else if (daysLeft > 0) {
    icon = <i class='far fa-smile'></i>;
  } else {
    icon = <i class='far fa-meh'></i>;
  }

  return (
    <div className='tooltip'>
      {icon}
      <div className='tooltiptext'>{daysLeft} days left</div>
      <div className='tooltiparrow'></div>
    </div>
  );
};

export default Icon;
