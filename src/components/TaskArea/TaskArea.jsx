import React from 'react';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import './TaskArea.scss';


const TaskArea = ({
  taskList,
  addTask,
  removeTask,
  toggleTaskCompletion,
  editTask,
  match,
}) => {
  const taskArea = match.path.substr(1);

  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      Add a task to {taskArea}: <TaskForm addTask={addTask} taskArea={taskArea} />
      {taskList ? (
        taskList.map(task => (
          <Task
            key={task.id}
            text={task.text}
            completed={task.completed}
            removeTask={removeTask}
            id={task.id}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))
      ) : (
          <p>No tasks present</p>
        )}
    </div>
  );
};

export default TaskArea;
