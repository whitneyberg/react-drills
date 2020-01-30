import React, {Component} from 'react'


class ToDoList extends Component {
    render() {
      return <p>{this.props.taskList}</p>;
    }
  }

  export default ToDoList