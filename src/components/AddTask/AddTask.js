import React, { Component } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    date: new Date().toISOString().substring(0, 10),
    important: false,
    error: '',
  };

  handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({
        important: e.target.checked,
      });
    } else if (e.target.type === 'text') {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === 'date') {
      this.setState({
        date: e.target.value,
      });
    }
  };

  handleSubmitButton = (e) => {
    const { text, date, important } = this.state;

    e.preventDefault();

    if (text) {
      const newTask = {
        id: Date.now(),
        text,
        active: true,
        important,
        date,
        endDate: '',
      };

      this.props.addTask(newTask);

      this.setState({
        text: '',
        date: new Date().toISOString().substring(0, 10),
        important: false,
        error: '',
      });

      this.props.switchList(true);
    } else {
      this.setState({
        error: 'Write task first',
      });
    }
  };

  render() {
    return (
      <div className='menu-wrapper'>
        <h1 className='form-title'>Tasks Manager</h1>
        <form className='form-wrapper' noValidate>
          <Input
            type='text'
            value={this.state.text}
            onChangeHandler={(e) => this.handleInputChange(e)}
            error={this.state.error}
          />
          <Input
            type='date'
            value={this.state.date}
            onChangeHandler={(e) => this.handleInputChange(e)}
            min={this.state.date}
            max={`${Number(this.state.date.substring(0, 4)) + 1}-12-31`}
          />
          <Input
            type='checkbox'
            checked={this.state.important}
            onChangeHandler={(e) => this.handleInputChange(e)}
          />
          <Button title='Add Task' onClickHandler={(e) => this.handleSubmitButton(e)} />
        </form>
      </div>
    );
  }
}

export default AddTask;
