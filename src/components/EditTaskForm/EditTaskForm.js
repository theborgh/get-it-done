import React from 'react';
import useInputState from '../../hooks/useInputState';

export default function EditTodoForm({editTodo, id, text, toggleIsEditing}) {
  const [value, handleChange, reset] = useInputState(text);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{marginLeft: '1rem', width: '50%'}}
    >
      <input
        type='text'
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
