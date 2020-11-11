import React, { Component } from 'react';

import AddTask from '../AddTask/AddTask';
import SideBar from '../SideBar/SideBar';
import TaskList from '../TaskList/TaskList';

import { LOCALSTORAGE_KEY } from '../../constants/storageConstants';

class App extends Component {
  state = {
    tasks: [],
    show: true,
  };

  addTask = (task) => {
    const tasks = [...this.state.tasks, task];

    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  setDoneTask = (id) => {
    const tasks = [...this.state.tasks];
    const date = new Date().toISOString();

    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.endDate = date.substring(0, 10) + ' ' + date.substring(11, 19);
      }
    });

    this.setState({
      tasks,
    });
  };

  switchList = (show) => {
    this.setState({
      show,
    });
  };

  componentDidMount() {
    const dataFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
    if (dataFromLocalStorage) {
      this.setState({
        tasks: JSON.parse(dataFromLocalStorage),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.state.tasks));
  }

  render() {
    const { show, tasks } = this.state;

    return (
      <>
        <AddTask addTask={this.addTask} switchList={this.switchList} />
        <SideBar switchList={this.switchList} show={show} />
        <TaskList
          tasks={tasks}
          show={show}
          deleteTask={this.deleteTask}
          setDoneTask={this.setDoneTask}
        />
      </>
    );
  }
}

export default App;
