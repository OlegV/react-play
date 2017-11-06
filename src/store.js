import { createStore, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import reducers from './reducers'

function log(store){
  return function (next) {
    return function (action) {
      console.log('ping', action);
      return next(action);
    };
  };
}

let todoList = [
  { done: true, text: 'Item 1'},
  { done: false, text: 'Item 2'},
  { done: false, text: 'Item 3'},
  { done: false, text: 'Item 4'},
];

const enhancer = compose(
  applyMiddleware(log, ThunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = createStore(
  reducers,
  {todoList, inProgress: false},
  enhancer
);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

export default store;

