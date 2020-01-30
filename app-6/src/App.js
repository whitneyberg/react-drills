import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList.js';

class App extends Component{
  constructor(props){
    super(props)
  

    this.state = {
      taskList: [],
      input: ''
    }
  }
    handleTask = (event) => {
      this.setState({taskList: [ this.state.taskList, this.state.input],
        input: "" })
    }

    handleInput = (value) => {
      this.setState({input : value})

    }

    render() {
      let taskList = this.state.taskList.map((el, i) => {
        return <ToDoList key={i} task={el} />;
      });
  
      return (
        <div className="App">
          <h1>To Do List:</h1>
        <div>

            <input
              value={this.state.input}onChange={e => this.handleInput(e.target.value)}/>
  
            <button onClick={this.handleTask}>Add Task</button>
          </div>
          {taskList}
        </div>
      );
    }
  }
export default App;
