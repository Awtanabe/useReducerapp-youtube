import React from 'react';

const Todo = ({todo, dispatch}) => {
  const toggleTodo = () => {
    dispatch({type: 'toggle-todo', payload: {id: todo.id}})
  }
  const deleteTodo = () => {
    dispatch({type: 'delete-todo', payload: {id: todo.id}})
  }
  return (
    <div>
      <span style={todo.is_complete ? {textDecoration: 'line-through'} : {} }>{todo.name}</span>
      <button onClick={toggleTodo}>Toggle</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default Todo;
