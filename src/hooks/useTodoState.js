import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialTasks => {
  const [tasks, setTasks] = useLocalStorageState("tasks", initialTasks);

  const addTask = (newTaskText, taskArea) => {
    setTasks([
      ...tasks,
      { id: uuid(), text: newTaskText, completed: false, area: taskArea }
    ]);
  };

  const removeTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return { tasks, addTask, removeTask, toggleTaskCompletion, editTask };
};
