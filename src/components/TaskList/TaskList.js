import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

const TaskList = ({ tasks, deleteTask, setDoneTask, show }) => {
  if (show === 'active') {
    tasks = tasks.filter((task) => task.active);
  } else {
    tasks = tasks.filter((task) => !task.active);
  }

  return (
    <>
      <div className='tasklist-wrapper'>
        <div className='tasks-wrapper'>
          <h2 className='tasks-title'>{show === 'active' ? 'Active tasks' : 'Done tasks'}</h2>
          {!tasks.length ? <h3 className='tasks-info'>No tasks yet..</h3> : null}
          {tasks.map((task) => (
            <Task key={task.id} task={task} deleteTask={deleteTask} setDoneTask={setDoneTask} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
