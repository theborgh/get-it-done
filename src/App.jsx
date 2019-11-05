import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TaskArea from './components/TaskArea/TaskArea';
import AboutPage from './pages/AboutPage'
import './App.scss';
import demoTasks from './demoTasks';
import demoProjects from './demoProjects'

function App() {
  const [tasks, setTasks] = useState(demoTasks);

  return (
    <div className='App' data-test='component-App'>
      <Navbar />
      <Sidebar projects={demoProjects} />

      <Switch>
        <Route path="/about" exact render={() => <AboutPage />} />
        <Route path="/inbox" exact render={() => <TaskArea todoList={tasks.inbox} />} />
        <Route path="/" render={() => <TaskArea todoList={tasks.next} />} />
      </Switch>
    </div>
  );
}

export default App;
