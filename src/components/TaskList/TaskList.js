import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

const TaskList = ({ addTask, deleteTask, setDoneTask, setUndoneTask, show, tasks }) => {
  if (show) {
    tasks = tasks.filter((task) => task.active);
  } else {
    tasks = tasks.filter((task) => !task.active);
  }

  return (
    <>
      <div className='tasklist-wrapper'>
        <div className='tasks-wrapper'>
          <h2 className='tasks-title'>{show ? 'Active tasks' : 'Done tasks'}</h2>
          {!tasks.length ? <h3 className='tasks-info'>No tasks yet..</h3> : null}
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              index={index}
              task={task}
              addTask={addTask}
              deleteTask={deleteTask}
              setDoneTask={setDoneTask}
              setUndoneTask={setUndoneTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
