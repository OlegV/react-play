import {ADD_TODO_START, ADD_TODO_SUCCESS} from '../actions';

const inProgress = (inProgress = false, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return true;
    case ADD_TODO_SUCCESS:
      return false;
    default:
      return false;
  }
};

export default inProgress