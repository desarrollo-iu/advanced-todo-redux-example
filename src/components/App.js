import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Todos</h2>
    </div>
    <div className="Todo-App">
      <AddTodo />
      <VisibleTodoList />
    </div>
  </div>
);

export default App;
