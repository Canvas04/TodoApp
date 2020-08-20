import React, { Component } from 'react';
import Task from '../task';
import './taskList.css';
import { formatDistanceToNow } from 'date-fns';
import TaskListItem from '../taskListItem'

class TodoList extends Component {
  render() {
    const elements = this.props.todos.map(el => {
      return (
        <TaskListItem nameClass={el.nameClass} stateTask={el.text} key={el.id} onDeleted={() => this.props.onDeleted(el.id)}/>)
    });
    return (
      <ul className='todo-list' >
        {elements}
      </ul>
    )
  }

}

export default TodoList;