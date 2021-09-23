import React from 'react';
import Overview from './components/Overview.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTask: '',
      tasks: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.inputTask === '') {
      return;
    }
    this.setState((prevState) => {
      const { inputTask, tasks } = prevState;
      return {
        inputTask: '',
        tasks: [...tasks, inputTask],
      };
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='inputTask'
          onChange={this.onChange}
          type='text'
          value={this.state.inputTask}
        ></input>
        <button>submit</button>
        <br />
        <br />
        <div>{this.state.inputTask}</div>
        <Overview data={this.state.tasks} />
      </form>
    );
  }
}
