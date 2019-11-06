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
        <Route path="/next" render={() => <TaskArea todoList={tasks.next} />} />
        <Route path="/inbox" exact render={() => <TaskArea todoList={tasks.inbox} />} />
        <Route path="/waiting" exact render={() => <TaskArea todoList={tasks.waiting} />} />
        <Route path="/scheduled" exact render={() => <TaskArea todoList={tasks.scheduled} />} />
        <Route path="/someday" exact render={() => <TaskArea todoList={tasks.someday} />} />
        <Route path="/today" exact render={() => <TaskArea todoList={tasks.today} />} />
      </Switch>
    </div>
  );
}

export default App;
