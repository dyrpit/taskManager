import React, { useState } from 'react';
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
          <button onClick={() => setDoneTask(task.id)}>Done</button>
          <button onClick={handleDelete}>X</button>
        </div>
      ) : (
        <div className={`task-wrapper ${importantClass} ${deletedClass}`}>
          <p className='task-text'>
            <span className='task-title'>"{task.text}"</span> - Done:{' '}
            <em className='task-date'>{task.endDate}</em>
          </p>
          <button onClick={handleDelete}>X</button>
        </div>
      )}
    </>
  );
};

export default Task;
