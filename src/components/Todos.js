import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiDeleteBinLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"

const Todos = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={todo.id}
    >
      
      <div className='input'>
      <input className="checkbox" checked={todo.isComplete} type={"checkbox"} onChange={() => completeTodo(todo.id)} name={"completed"} id={todo.id}/>
       {todo.text}
      </div>

      <div className='icons'>
        <RiDeleteBinLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        {!todo.isComplete && (
          <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        )}
       
      </div>
    </div>
  ));
};

export default Todos;