import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';


class Clickey extends Component {
  state = {
  text: '',
  todos: [],
  isClicked: false
  }

  wasClicked = () => {
    this.setState({ isClicked: !this.state.isClicked})
    console.log(this.state.isClicked)
  }

  render() {
    return (
      <div>
        <button onClick={this.wasClicked}>Click Me</button>
      </div>
    )
  }
};

export default Clickey;
