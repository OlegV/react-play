import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let TodoInput = ({inProgress, dispatch}) => {
  let inputRef;

  return (
    <div>
      {inProgress && <p>is adding ...</p>}
      <input ref={node => {
        inputRef = node }
      }
      />
      <button onClick={ ()=>{
        dispatch(
          addTodo(inputRef.value)
        );
        inputRef.value = '';
      } }> Add </button>
    </div>
  );
};

const mapStateToProps = state => ({inProgress: state.inProgress});

export default connect(mapStateToProps)(TodoInput);