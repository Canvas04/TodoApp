import React from 'react';
import Task from '../task';

const TodoList = () => {
  return (
    <ul className='todo-list' >
      <li className='completed'>
        <Task state='Completed ' date='17 seconds' />
      </li>

      <li className='editing'>
        <Task state='Completed ' date='5 minutes' />
        <input type='text' className='edit' value='Editing task' />
      </li>
      <li>
        <Task state=' Active ' date='5 minutes' />
      </li>
    </ul>
  )
}

export default TodoList;