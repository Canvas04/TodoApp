import React, { Component } from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
import { be } from 'date-fns/locale';
class Main extends Component {
  state = {
    data: [
      { id: 1, completed: true, text: 'Completed task', nameClass: 'Completed' },
      { id: 2, completed: true, text: 'Editing task', nameClass: 'editing' },
      { id: 3, completed: true, text: 'Active task' }
    ]
  }
  deleteEl = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      data.splice(idx,1)
      const before = data.slice(0,idx);
      const after = data.slice(idx + 1);
      const resArr = [...before,...after]
return {
  data: resArr
}
    })
  }
  render() {
    return (
      <section className='main'>

        <TodoList todos={this.state.data} onDeleted={this.deleteEl} />
        <Footer />
      </section>
    )
  }
}

export default Main;