import React, { Component } from 'react';
import './task.css';


class Task extends Component {

  state = {
    done: false
  }
  onSpanCLick = () => {
    this.setState({
      done:true
    })
  }
  render() {
    const { done } = this.state;
    let classNames = 'description';
    if(done) {
      classNames+= ' done';
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className={classNames} onClick = {this.onSpanCLick}>{this.props.state} </span>{' '}
          <span className='created'>created {this.props.date} ago</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
    )
  }

}

export default Task;