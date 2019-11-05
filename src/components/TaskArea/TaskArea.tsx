import React from 'react';
import './TaskArea.scss';

interface Todo {
  text: string;
}

const TaskArea = ({todoList}: {todoList: Todo[]}) => {
  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      TaskArea
      {todoList
        ? todoList.map(todo => <div className='TaskArea-task'>{todo.text}</div>)
        : null}
      <div className='TaskArea-task'>Do some stuff</div>
      <div className='TaskArea-task'>Do more stuff</div>
      <div className='TaskArea-task'>Do even more stuff</div>
    </div>
  );
};

export default TaskArea;
