import React, { Component } from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
class Main extends Component {
  state = {
    data: [
      { id: 1, completed: true, text: 'Completed task' },
      { id: 2, completed: true, text: 'Editing task' },
      { id: 3, completed: true, text: 'Active task' }
    ]
  }
  render() {
    return (
      <section className='main'>

        <TodoList todos = {this.state.data}/>
        <Footer />
      </section>
    )
  }
}

export default Main;