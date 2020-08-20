import React from 'react';
import Task from '../task';
import { formatDistanceToNow } from 'date-fns';

const TaskListItem = (props) => {
    return (
        <li className={props.nameClass} key={props.id}>
          <Task state={props.stateTask} date = {formatDistanceToNow(new Date())} />
          { props.nameClass == 'editing' ? <input type='text' className='edit' value='Editing task' />: null}
         </li>
    )
}
export default TaskListItem;