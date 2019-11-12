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
}) {
  const [isEditing, toggleIsEditing] = useToggle();
  const [isShowingTaskDetails, toggleIsShowingTaskDetails] = useToggle();

  return (
    <div className='Task' onClick={toggleIsShowingTaskDetails}>
      {isEditing ? (
        <EditTaskForm
          editTodo={editTask}
          id={id}
          text={text}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
          <>
            <div className='Task-buttons'>
              <input
                type='checkbox'
                defaultChecked={completed}
                onClick={(evt) => { evt.stopPropagation(); toggleTaskCompletion(id) }}
              />
            </div>
            <div className='Task-text'>{text}</div>
            <div className='Task-buttons'>

              <button onClick={(evt) => { evt.stopPropagation(); toggleIsEditing(); }}>Edit</button>
              <button onClick={(evt) => { evt.stopPropagation(); removeTask(id) }}>Delete</button>
            </div>
            {isShowingTaskDetails && <div className="Task-details">Task details</div>}
          </>
        )}
    </div>
  );
}
