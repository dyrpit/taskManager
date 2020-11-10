import React, { Component } from 'react';
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

      this.props.switchList('active');
    } else {
      this.setState({
        error: 'Write task first',
      });
    }
  };

  render() {
    return (
      <div className='menu-wrapper'>
        <h1 className='form-title'>Add your task</h1>
        <form className='form-wrapper' noValidate>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Add task'
              value={this.state.text}
              onChange={this.handleInputChange}
            ></input>
            {this.state.error && <p className='warning'>{this.state.error}</p>}
          </div>
          <div className='input-wrapper'>
            <input
              type='date'
              min={this.state.date}
              max={`${Number(this.state.date.substring(0, 4)) + 1}-12-31`}
              value={this.state.date}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className='input-wrapper'>
            <input
              id='important'
              type='checkbox'
              checked={this.state.important}
              onChange={this.handleInputChange}
            ></input>
            <label htmlFor='important'>Important</label>
          </div>
          <button type='submit' onClick={this.handleSubmitButton}>
            Add task
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;
