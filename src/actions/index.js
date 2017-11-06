
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

export const addTodo = (text) => {

  return dispatch => {
    dispatch(addTodoStart());

    setTimeout( () => {
      dispatch(addTodoSuccess(text))
    }, 1000)
  };
};

export const addTodoStart = () => {
  return { type: ADD_TODO_START }
};

export const addTodoSuccess = (text) => {
  return { type: ADD_TODO_SUCCESS, text }
};

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
};

export const deleteTodo = (index) => {
  return { type: DELETE_TODO, index }
};