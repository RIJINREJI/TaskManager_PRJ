import { useState } from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear input field after adding task
    }
  };

  return (
    <div>
      <Header title="Task Manager ERP" />
      <main style={{ padding: "20px" }}>
        <h2>Manage Your Tasks</h2>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            style={{ padding: "10px", width: "300px" }}
          />
          <button
            onClick={addTask}
            style={{
              marginLeft: "10px",
              padding: "10px",
              backgroundColor: "#0070f3",
              color: "#fff",
            }}
          >
            Add Task
          </button>
        </div>
        <TaskList tasks={tasks} />
        <Counter />
      </main>
    </div>
  );
};

export default Home;
