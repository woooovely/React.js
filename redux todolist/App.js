import logo from './logo.svg';
import './App.css';
import React from 'react';
import CounterContainer from './containers/CouterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;