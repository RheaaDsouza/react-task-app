import React from "react";

/**
 * Task screen , displays tasks
 * @returns
 */

const taskList = [
  "Add visual styles",
  "Add light and dark themes",
  "Enable switching the theme",
];

function Tasks() {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to your tasks!</h1>

        <section>
          <p id="msg">Current tasks:</p>
          <ul>
            {taskList.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </section>
      </header>
    </div>
  );
}

export default Tasks;
