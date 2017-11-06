import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Todo = ({ done, text, toggleHandler, deleteHandler }) => {
    return (
      <li
        className='todo-item'
        style={{
          textDecoration: done ? 'line-through' : 'none'
        }}
      >
        <span onClick={toggleHandler}> {text} </span>
        <span onClick={deleteHandler}> X </span>
      </li>
    )
  };

Todo.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo