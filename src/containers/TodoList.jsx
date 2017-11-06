import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

import TodoList from '../components/TodoList.jsx';

const mapStateToProps = state => (
  {items: state.todoList}
);

const mapDispatchToProps = ({
  toggleHandler: toggleTodo,
  deleteHandler: deleteTodo
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
