import React from 'react';
import Task from '../Task/Task';
import './TaskArea.scss';

interface Todo {
  text: string;
}

const TaskArea = ({todoList}: {todoList: Todo[]}) => {
  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      {todoList && todoList.map(todo => <Task text={todo.text} />)}
    </div>
  );
};

export default TaskArea;
