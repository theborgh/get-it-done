import React from 'react';
import './Task.scss';

export default function Task({text}: {text: string}) {
  return (
    <div className='Task'>
      <div className='Task-text'>{text}</div>
      <div className='Task-checkbox'>
        <input type='checkbox' />
      </div>
    </div>
  );
}
