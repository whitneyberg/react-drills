import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask.js";
import List from "./List.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  handleAddTask = (task) => {
    this.setState({ list: [this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App

