import React from 'react';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import './TaskArea.scss';

interface Task {
  text: string;
  completed: boolean;
  removeTask: Function;
  id: string;
  toggleTaskCompletion: Function;
  editTask: Function;
}

const TaskArea = ({
  taskList,
  addTask,
  removeTask,
  toggleTaskCompletion,
  editTask,
}: {
  taskList: Task[];
  addTask: Function;
  removeTask: Function;
  toggleTaskCompletion: Function;
  editTask: Function;
}) => {
  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      <TaskForm addTask={addTask} />
      {taskList ? (
        taskList.map(task => (
          <Task
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
