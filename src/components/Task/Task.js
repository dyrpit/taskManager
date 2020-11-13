import React, { useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';

import './Task.css';

const Task = ({ addTask, deleteTask, setDoneTask, setUndoneTask, task }) => {
  const [deleted, setDeleted] = useState(false);
  const [open, setOpen] = useState(false);

  const { active, important } = task;

  const importantClass = important ? 'important' : '';
  const deletedClass = deleted ? 'deleted' : '';

  const handleDeleteButton = () => {
    setDeleted(true);
    setTimeout(() => deleteTask(task.id), 3000);
  };

  const handleDoneButton = () => {
    setDoneTask(task.id);
  };

  const handleModalOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleUndoneTask = () => {
    setUndoneTask(task.id);
  };

  return (
    <>
      <Modal isOpen={open} handleModalOpen={handleModalOpen} task={task} addTask={addTask} />
      {active ? (
        <div className={`task-wrapper ${importantClass} ${deletedClass}`}>
          <p className='task-text'>
            <span className='task-title'>"{task.text}"</span> - do until:{' '}
            <em className='task-date'>{task.date}</em>
          </p>
          <Icon date={task.date} />
          <Button title='done' onClickHandler={handleDoneButton} isDisabled={deleted} />
          <Button title='edit' onClickHandler={handleModalOpen} isDisabled={deleted} />
          <Button
            title='x'
            onClickHandler={handleDeleteButton}
            buttonStyle='close'
            isDisabled={deleted}
          />
        </div>
      ) : (
        <div className={`task-wrapper ${deletedClass}`}>
          <p className='task-text'>
            <span className='task-title'>"{task.text}"</span> - Done:{' '}
            <em className='task-date'>{task.endDate}</em>
          </p>
          <Button title='undone' onClickHandler={handleUndoneTask} />
          <Button title='x' onClickHandler={handleDeleteButton} isDisabled={deleted} />
        </div>
      )}
    </>
  );
};

export default Task;
