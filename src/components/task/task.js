import React, { Component } from 'react';
import './task.css';


class Task extends Component {

  state = {
    done: false
  }
  onSpanClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })


}

render() {
  const { done } = this.state;
  let classNames = 'description';
  if (done) {
    classNames += ' done';
  }
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' />
      <label>
        <span className={classNames} onClick={this.onSpanClick}>{this.props.state} </span>{' '}
        <span className='created'>created {this.props.date} ago</span>
      </label>
      <button className='icon icon-edit'></button>
      <button className='icon icon-destroy ' onClick={this.props.onDeleted}></button>
    </div>
  )
}

}

export default Task;