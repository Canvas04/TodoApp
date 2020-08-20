import React, { Component } from 'react';
import Task from '../task';
import './taskList.css';
import { formatDistanceToNow } from 'date-fns';
import TaskListItem from '../taskListItem'
console.log(TaskListItem)
class TodoList extends Component { 
  render() {
    console.log(this.props.todos.filter(el => el.id ==1)[0].text)
    return (
      <ul className='todo-list' >
        <TaskListItem nameClass='completed' stateTask={this.props.todos.filter(el => el.id ==1)[0].text} />
        <TaskListItem nameClass='editing' stateTask={this.props.todos.filter(el => el.id ==2)[0].text} />
        <TaskListItem stateTask={this.props.todos.filter(el => el.id ==3)[0].text} />
      </ul>
    )
  }

}

export default TodoList;