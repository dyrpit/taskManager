import React from 'react';

import './Icon.css';

const Icon = ({ date }) => {
  const endDateTime = new Date(date).getTime();
  const currentTime = Date.now();
  const day = 1000 * 60 * 60 * 24;

  const result = endDateTime - currentTime;
  let daysLeft = Math.ceil(result / day);
  let icon = '';
  let text = 'days left';

  if (daysLeft < 0) {
    icon = <i class='far fa-frown'></i>;
    daysLeft = Math.abs(daysLeft);
    text = 'days after deadline';
  } else if (daysLeft > 0) {
    icon = <i class='far fa-smile'></i>;
  } else {
    icon = <i class='far fa-meh'></i>;
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
