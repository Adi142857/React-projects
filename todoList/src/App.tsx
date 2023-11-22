import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function ok(event) {
    event.preventDefault();
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    if (todos.includes(task)) {
      alert("Task already exists");
      return;
    }

    if (task.length > 20) {
      alert("Task too long");
      return;
    }
  
    console.log("ok");
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, task];
    });
  }

  return (
    <>
      <form onSubmit={ok}>
        <h1>Todo app</h1>

        <div className="input-container">
          <input
            className="spacer"
            placeholder="Enter task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add</button>
          <button type="submit">Del</button>
        </div>
        <ol type="I">
          {todos.map((todo, index) => (
            <div>
              <li key={index}>{todo}</li>
            </div>
          ))}
        </ol>
      </form>
    </>
  );
}

export default App;
