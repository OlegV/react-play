import { combineReducers } from 'redux';

import todoList from './todoList';
import inProgress from './inProgress';

// function todoApp (state={}, action) {
//   return {
//     todoList: todo(state.todoList, action),
//     inProgress: inProgress(state.inProgress, action)
//   }
// }

const todoApp = combineReducers({
  todoList,
  inProgress
});

export default todoApp;