import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';


class todoList extends Component {
  // Create a reference to grab input field
  textInput = React.createRef()

  // Create State object YAY, my prayers have been answered.
  state = {
    text: '',
    todos: [],
    isClicked: false,
  }

  // Function to set focus on text input Field
  componentDidMount() {
    this.textInput.current.focus();
  }

  // Actions taken when Add Todo button is clicked.
  addTodoHandler = () => {
    // Save below 2 lines of code for another project
    // this.setState({ isClicked: !this.state.isClicked })
    // console.log(this.state.isClicked)
    
    // Move submitted text to todos array
    this.state.todos.push(this.state.text);
    // console.log('addTodoHandler() todo Push: ', this.state.todos);

    // Clear input field
    this.setState({ text: ''});

    // Set Focus on Text Input Field
    this.componentDidMount();
  }

  removeTodoHandler = (index)=> {
    // console.log(index)
    // console.log('todos state before splice***', this.state.todos)

    // Splice out element in Todos by index
    this.setState({
      todos: this.state.todos.splice(index, 1)
    })

    // Set state to updated todos state 
    // (Otherwise splice returns deleted element in new array that is rendered)
    this.setState({ todos: this.state.todos })
    // console.log('todos state after splice***', this.state.todos)
  }

  inputFieldText = (e) => {
    this.setState({ text: e.target.value })
    // console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.addTodoHandler}>Add Item</button>
        <input ref={this.textInput} value={this.state.text} onChange={this.inputFieldText}></input>
        <ul>
          {this.state.todos.map((todo, index) => 
            <li key={index}>{todo}<button onClick={() => this.removeTodoHandler(index)}>Done!</button></li>
          )}
        </ul>
      </div>
    )
  }
};

export default todoList;
