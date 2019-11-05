import React from 'react';
import './TaskArea.scss';

interface Todo {
  text: string;
}

const TaskArea = ({todoList}: {todoList: Todo[]}) => {
  return (
    <div className='TaskArea' data-test='component-TaskArea'>
      {todoList
        ? todoList.map(todo => <div className='TaskArea-task'>{todo.text}</div>)
        : null}
    </div>
  );
};

export default TaskArea;
