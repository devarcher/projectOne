import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';


class todoList extends Component {
  state = {
  text: '',
  todos: [],
  isClicked: false
  }

  wasClicked = () => {
    this.setState({ isClicked: !this.state.isClicked})
    console.log(this.state.isClicked)
  }

  textInput = (e) => {
    this.setState( {text: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.wasClicked}>Click Me</button>
        <input value={this.state.text} onChange={this.textInput}></input>

      </div>
    )
  }
};

export default todoList;
