import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.jsx';

const TodoList = ({items, toggleHandler, deleteHandler}) => {
  return (
    <div>
      <h2> List </h2>
      <ul>
        {items.map( (todo, index) =>
          <Todo
              key={index}
              {...todo}
              toggleHandler={ ()=>toggleHandler(index) }
              deleteHandler={ ()=>deleteHandler(index) }
          />
        )}
      </ul>
    </div>
  );
};

Todo.propTypes = {
  toggleHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  items: PropTypes.array
};

export default TodoList;