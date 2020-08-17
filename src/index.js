import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <input className='new-todo' placeholder='What needs to be done ?' autoFocus />
    </header>
  )
}
const TodoList = () => {
  
}
const Main = () => {
  return (
    <section className='main'>

    </section>
  )
}
const App = () => {
  return (
    <section className='todoApp'>
      <Header />
      <Main />
    </section>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))