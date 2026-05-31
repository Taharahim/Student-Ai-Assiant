import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Tasks</h2>

        <div>
          <input
            className="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="grid">
          {tasks.map((t, i) => (
            <div className="card" key={i}>
              <p style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.text}
              </p>

              <button className="btn" onClick={() => toggleTask(i)}>
                Toggle
              </button>

              <button className="btn btn-danger" onClick={() => deleteTask(i)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}