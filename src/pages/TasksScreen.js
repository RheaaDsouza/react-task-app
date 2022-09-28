import React, { useRef, useState } from "react";

function AddTask({ setTasks }) {
  const ref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const task = event.target.elements.task.value;
    ref.current.value = "";
    setTasks((tasks) => [...tasks, task]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref} type="text" id="task" />
      <button type="submit">Submit</button>
    </form>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}

/**
 * Task screen , displays a list of tasks
 * @returns
 */
function TasksScreen() {
  const taskList = [
    "Add visual styles",
    "Add light and dark themes",
    "Enable switching the theme",
  ];
  const [tasks, setTasks] = useState(taskList);
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to your tasks!</h1>
        <AddTask setTasks={setTasks} />
        <TaskList tasks={tasks} />
      </header>
    </div>
  );
}

export default TasksScreen;
