import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TaskArea from './components/TaskArea/TaskArea';
import './App.scss';

function App() {
  const [taskList, settaskList] = useState(null);
  const demoTasks = ["Reach these kids", "Do the laundry"]

  return (
    <div className='App' data-test='component-App'>
      <Navbar />
      <Sidebar />
      <TaskArea todoList={demoTasks} />
    </div>
  );
}

export default App;
