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

  console.log(initialTasks)

  const {
    tasks,
    addTask,
    removeTask,
    toggleTaskCompletion,
    editTask,
  } = useTodoState(initialTasks);

  console.log('tasks: ', tasks)

  return (
    <div className='App' data-test='component-App'>
      <Navbar />
      <Sidebar projects={demoProjects} />

      <Switch>
        <Route path="/about" exact render={() => <AboutPage />} />

        <Route path="/next" render={() =>
          <TaskArea
            todoList={tasks.filter(todo => todo.area === "next")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/inbox" exact render={() =>
          <TaskArea todoList={tasks.filter(todo => todo.area === "inbox")}
            addTask={addTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask} />}
        />

        <Route path="/waiting" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "waiting")} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />} />
        <Route path="/scheduled" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "scheduled")} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />} />
        <Route path="/someday" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "someday")} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />} />
        <Route path="/today" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "today")} />} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />
        <Route path="/logbook" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "logbook")} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />} />
        <Route path="/trash" exact render={() => <TaskArea todoList={tasks.filter(todo => todo.area === "trash")} />} addTask={addTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} />
      </Switch>
    </div>
  );
}

export default App;
