import {ADD_TODO_SUCCESS, TOGGLE_TODO, DELETE_TODO} from '../actions';

const todoList = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return [...todoList, { text: action.text, done: false }];
    case TOGGLE_TODO:
      return todoList.map(
        (todo, index) =>
          action.index === index
            ? { text: todo.text, done: !todo.done }
            : todo
      );
    case DELETE_TODO:
      return todoList.filter( (item, index)=>index!==action.index);
    default:
      return todoList
  }
};

export default todoList