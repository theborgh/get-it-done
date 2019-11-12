import React from "react";
import useInputState from "../../hooks/useInputState";

export default function TaskForm({ addTask, taskArea }) {
  const [taskText, handleChange, reset] = useInputState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTask(taskText, taskArea);
          reset();
        }}
      >
        <input
          type="text"
          value={taskText}
          onChange={handleChange}
          margin="normal"
          label="Add new Task"
        />
      </form>
    </div>
  );
}
