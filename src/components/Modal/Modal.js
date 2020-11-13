import React, { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './Modal.css';

const Modal = ({ addTask, handleModalOpen, isOpen, task }) => {
  const [state, setState] = useState({
    text: task.text,
    date: task.date,
    important: task.important,
  });

  const display = isOpen ? 'open' : '';

  const handleInputChange = (e) => {
    const { value, id } = e.target;

    if (id === 'important') {
      setState({
        [id]: !state.important,
      });
    } else {
      setState({
        [id]: value,
      });
    }
  };

  const handleSubmitButton = (e) => {
    const { text, date, important } = state;

    e.preventDefault();

    const newTask = {
      id: task.id,
      text: task.text,
      date: task.date,
      active: true,
      important: task.important,
      endDate: '',
    };

    if (text) {
      newTask.text = text;
    } else if (date) {
      newTask.date = date;
    } else if (task.important !== important) {
      newTask.important = important;
    }

    addTask(newTask);
    handleModalOpen();
    setState({
      text: newTask.text,
      date: newTask.date,
      important: newTask.important,
    });
  };

  return (
    <div className={`modal-background ${display}`}>
      <div className='modal-content'>
        <Button title='x' buttonStyle='close' onClickHandler={handleModalOpen} />
        <h3 className='modal-title'>Edit task</h3>
        <form className='modal-form-wrapper' noValidate>
          <Input type='text' value={state.text} onChangeHandler={handleInputChange} />
          <Input
            type='date'
            value={state.date}
            onChangeHandler={handleInputChange}
            min={new Date().toISOString().substring(0, 10)}
            max={`${Number(new Date().toISOString().substring(0, 10).substring(0, 4)) + 1}-12-31`}
          />
          <Input type='checkbox' checked={state.important} onChangeHandler={handleInputChange} />
          <Button title='Add Task' onClickHandler={handleSubmitButton} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
