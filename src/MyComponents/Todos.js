import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} onDelete={props.onDelete} /> <hr/>
            </>
          )
        })}
    </div>
  )
}

export default Todos
