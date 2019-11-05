import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
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


      <Switch>
        <Route path="/" exact render={() => <div><Sidebar /> <TaskArea todoList={demoTasks} /></div>} />
        <Route path="/about" exact render={() => <h1>About us</h1>} />
      </Switch>
    </div>
  );
}

export default App;
