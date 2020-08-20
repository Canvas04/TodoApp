import React, { Component } from 'react';
import Task from '../task';
import './taskList.css';
import { formatDistanceToNow } from 'date-fns';
import TaskListItem from '../taskListItem'
console.log(TaskListItem)
class TodoList extends Component {

  
  render() {
    return (
      <ul className='todo-list' >
        <TaskListItem nameClass='completed' stateTask='Completed' />
        <TaskListItem nameClass='editing' stateTask='Completed' >
        {<input type='text' className='edit' value='Editing task' />}
          </TaskListItem>
        <TaskListItem stateTask='Active' />
      </ul>
    )
  }

}

export default TodoList;