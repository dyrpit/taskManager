import React from 'react';

import './Input.css';

const Input = ({ type, value, onChangeHandler, error, min, max, checked }) => {
  const inputs = {
    text: (
      <>
        <input
          type='text'
          id='text'
          placeholder='Add task'
          value={value}
          onChange={onChangeHandler}
        ></input>
        {error && <p className='warning'>{error}</p>}
      </>
    ),
    date: (
      <>
        <label htmlFor='date'>Deadline date:</label>
        <input
          type='date'
          id='date'
          min={min}
          max={max}
          value={value}
          onChange={onChangeHandler}
        ></input>
      </>
    ),
    checkbox: (
      <>
        <input id='important' type='checkbox' checked={checked} onChange={onChangeHandler}></input>
        <label>Important</label>
      </>
    ),
  };

  return <div className='input-wrapper'>{inputs[type]}</div>;
};

export default Input;
