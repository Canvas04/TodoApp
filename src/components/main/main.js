import React, { Component } from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
class Main extends Component {
  state = {
    data: [
     {id: 1,completed: true, text: 'task'} ,
     {id: 1,completed: true, text: 'task'},
     {id: 1,completed: true, text: 'task'}
  ]
  }
  render() {
    return (
      <section className='main'>

        <TodoList />
        <Footer />
      </section>
    )
  }
}

export default Main;