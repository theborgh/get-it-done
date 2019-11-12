import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import TaskArea from './components/TaskArea/TaskArea';
import AboutPage from './pages/AboutPage'
import './App.scss';
import demoProjects from './demoProjects';
import useTodoState from './hooks/useTodoState';

function App() {
  const initialTasks = JSON.parse(window.localStorage.getItem('tasks') || '[]');

  const {
    tasks,
    addTask,
    removeTask,
    toggleTaskCompletion,
    editTask,
  } = useTodoState(initialTasks);

  return (
    <div className='App' data-test='component-App'>
      <Navbar />
      <Sidebar projects={demoProjects} />

      <Switch>
        <Route path="/about" exact render={() => <AboutPage />} />

        <Route path="/next" render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "next")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/inbox" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "inbox")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/waiting" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "waiting")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/scheduled" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "scheduled")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/someday" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "someday")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/today" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "today")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/logbook" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "logbook")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/trash" exact render={(routeProps) =>
          <TaskArea
            {...routeProps}
            taskList={tasks.filter(task => task.area === "trash")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

      </Switch>
    </div>
  );
}

export default App;
