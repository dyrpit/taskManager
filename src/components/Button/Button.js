import React from 'react';

import './Button.css';

const Button = ({ onClickHandler, title, isDisabled, buttonStyle }) => {
  const aditionalStyle = buttonStyle || 'primary';

  return (
    <button onClick={onClickHandler} className={`${aditionalStyle}`} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default Button;
