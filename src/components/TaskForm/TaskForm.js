import React from 'react';
import useInputState from '../../hooks/useInputState';

export default function TaskForm({addTask}) {
  const [value, handleChange, reset] = useInputState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTask(value);
          reset();
        }}
      >
        <input
          type='text'
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add new Task'
          fullWidth
        />
      </form>
    </div>
  );
}
