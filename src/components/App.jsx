import React from 'react';

import TodoListContainer from '../containers/TodoList.jsx';
import TodoInputContainer from '../containers/TodoInput.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <TodoListContainer/>
        <TodoInputContainer/>
      </div>
    );
  }
}