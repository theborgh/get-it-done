import React from 'react';
import './Task.scss';
import useToggle from '../../hooks/useToggle';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

export default function Task({
  text,
  completed,
  removeTask,
  id,
  toggleTaskCompletion,
  editTask,
}: {
  text: string;
  completed: boolean;
  removeTask: Function;
  id: string;
  toggleTaskCompletion: Function;
  editTask: Function;
}) {
  const [isEditing, toggleIsEditing] = useToggle();

  return (
    <div className='Task'>
      {isEditing ? (
        <EditTaskForm
          editTodo={editTask}
          id={id}
          text={text}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <div className='Task-text'>{text}</div>
          <div className='Task-checkbox'>
            <input
              type='checkbox'
              checked={completed}
              onClick={() => toggleTaskCompletion(id)}
            />
          </div>
        </>
      )}
    </div>
  );
}
