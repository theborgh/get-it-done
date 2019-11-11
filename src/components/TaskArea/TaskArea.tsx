import React from 'react';
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';
import './TaskArea.scss';

interface Todo {
  text: string;
}

const TaskArea = ({
  todoList,
  addTask,
}: {
  todoList: Todo[];
  addTask: Function;
}) => {
  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      <TaskForm addTask={addTask} />
      {todoList ? (
        todoList.map(todo => <Task text={todo.text} />)
      ) : (
        <p>No tasks present</p>
      )}
    </div>
  );
};

export default TaskArea;
