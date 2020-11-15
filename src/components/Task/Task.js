import React, { useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';

import './Task.css';

const Task = ({ addTask, deleteTask, index, setDoneTask, setUndoneTask, task }) => {
  const [deleted, setDeleted] = useState(false);
  const [open, setOpen] = useState(false);

  const { active, important } = task;

  const importantClass = important && active ? 'important' : '';
  const deletedClass = deleted ? 'deleted' : '';

  const handleDeleteButton = () => {
    setDeleted(true);
    setTimeout(() => deleteTask(task.id), 3000);
  };

  const handleDoneButton = () => {
    setDoneTask(task.id);
  };

  const handleToggleModal = () => {
    const [body] = [...document.getElementsByTagName('body')];
    body.classList.toggle('disable-scroll');
    setOpen((prevState) => !prevState);
  };

  const handleUndoneTask = () => {
    setUndoneTask(task.id);
  };

  return (
    <>
      {open && (
        <Modal isOpen={open} handleModalOpen={handleToggleModal} task={task} addTask={addTask} />
      )}

      <div className={`task-wrapper ${importantClass} ${deletedClass}`}>
        <span className='task-index'>{index + 1}</span>
        <p className='task-text'>
          <span className='task-title'>"{task.text}"</span>
          <span>{active ? ' - do until: ' : ' - Done: '}</span>
          <em className='task-date'>{active ? `${task.date} ` : `${task.endDate}`}</em>
        </p>
        {active ? (
          <>
            <Icon date={task.date} />
            <Button title='done' onClickHandler={handleDoneButton} isDisabled={deleted} />
            <Button title='edit' onClickHandler={handleToggleModal} isDisabled={deleted} />
          </>
        ) : (
          <>
            <Button title='undone' onClickHandler={handleUndoneTask} />
          </>
        )}
        <Button
          title='x'
          onClickHandler={handleDeleteButton}
          buttonStyle='close'
          isDisabled={deleted}
        />
      </div>
    </>
  );
};

export default Task;
