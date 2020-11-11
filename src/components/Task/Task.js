import React, { useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import './Task.css';

const Task = ({ task, deleteTask, setDoneTask }) => {
  const [deleted, setDeleted] = useState(false);
  const { active, important } = task;

  const importantClass = important ? 'important' : '';
  const deletedClass = deleted ? 'deleted' : '';

  const handleDelete = () => {
    setDeleted(true);
    setTimeout(() => deleteTask(task.id), 3000);
  };

  return (
    <>
      {active ? (
        <div className={`task-wrapper ${importantClass} ${deletedClass}`}>
          <p className='task-text'>
            <span className='task-title'>"{task.text}"</span> - do until:{' '}
            <em className='task-date'>{task.date}</em>
          </p>
          <Icon date={task.date} />
          <Button title='done' onClickHandler={() => setDoneTask(task.id)} isDisabled={deleted} />
          <Button title='x' onClickHandler={handleDelete} isDisabled={deleted} />
        </div>
      ) : (
        <div className={`task-wrapper ${deletedClass}`}>
          <p className='task-text'>
            <span className='task-title'>"{task.text}"</span> - Done:{' '}
            <em className='task-date'>{task.endDate}</em>
          </p>
          <Button title='x' onClickHandler={handleDelete} isDisabled={deleted} />
        </div>
      )}
    </>
  );
};

export default Task;
