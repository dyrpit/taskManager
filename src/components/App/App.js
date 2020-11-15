import React, { Component } from 'react';

import AddTask from '../AddTask/AddTask';
import SideBar from '../SideBar/SideBar';
import SortBar from '../SortBar/SortBar';
import TaskList from '../TaskList/TaskList';

import { LOCALSTORAGE_KEY } from '../../constants/storageConstants';

import { searchTaskByName, tasksSortBy } from '../../services/sortService';

class App extends Component {
  state = {
    tasks: [],
    show: true,
    filtered: [],
  };

  addTask = (task) => {
    const index = this.state.tasks.findIndex((item) => item.id === task.id);

    if (index > -1) {
      const tasks = this.state.tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      });

      this.setState({
        tasks,
        filtered: tasks,
      });
    } else {
      const tasks = [...this.state.tasks, task];

      this.setState({
        tasks,
        filtered: tasks,
      });
    }
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
      filtered: tasks,
    });
  };

  searchTask = (text) => {
    const filtered = searchTaskByName(this.state.tasks, text);

    this.setState({
      filtered,
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
      filtered: tasks,
    });
  };

  setUndoneTask = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = true;
        task.endDate = '';
      }
    });

    this.setState({
      tasks,
      filtered: tasks,
    });
  };

  sortTasks = (sortValue, sortDirection) => {
    const tasks = tasksSortBy(this.state.filtered, sortValue, sortDirection);

    this.setState({
      filtered: tasks,
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
        filtered: JSON.parse(dataFromLocalStorage),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.state.tasks));
  }

  render() {
    const { show, filtered } = this.state;

    return (
      <>
        <AddTask addTask={this.addTask} switchList={this.switchList} />
        <SideBar switchList={this.switchList} show={show} />
        <SortBar sortTasks={this.sortTasks} searchTask={this.searchTask} />
        <TaskList
          tasks={filtered}
          show={show}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          setDoneTask={this.setDoneTask}
          setUndoneTask={this.setUndoneTask}
        />
      </>
    );
  }
}

export default App;
