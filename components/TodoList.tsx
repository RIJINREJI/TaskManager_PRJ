import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import styles from "@/styles/TodoList.module.css"; // Import CSS for styling

// Define the structure of a task
interface Task {
  id: number; // Unique identifier
  text: string; // Task description
  completed: boolean; // Completion status
  dueDate?: string; // Optional due date
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for task input
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all"); // State for filter
  const [searchText, setSearchText] = useState(""); // State for search query
  const [dueDate, setDueDate] = useState(""); // State for due date

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    const task: Task = {
      id: Date.now(), // Generate unique ID based on current timestamp
      text: newTask, // Set task text
      completed: false, // Set task as incomplete
      dueDate, // Set task due date
    };
    setTasks([...tasks, task]); // Add new task to tasks state
    setNewTask(""); // Clear task input
    setDueDate(""); // Clear due date input
  };

  // Toggle task completion status
  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit a task's text
  const handleEditTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  // Clear all completed tasks
  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter tasks based on filter state and search query
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className={styles.container}>
      <h2>To-Do List</h2> {/* Title */}

      {/* Input Section */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update newTask state on input change
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)} // Update dueDate state on input change
        />
        <button onClick={handleAddTask}>Add Task</button> {/* Add task button */}
      </div>

      {/* Search and Filter Section */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update searchText state on input change
        />
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""} // Highlight active filter
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""} // Highlight active filter
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={filter === "pending" ? styles.active : ""} // Highlight active filter
        >
          Pending
        </button>
        <button onClick={clearCompletedTasks}>Clear Completed</button> {/* Clear completed tasks button */}
      </div>

      {/* Task List Section */}
      <ul className={styles.taskList}>
        {filteredTasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span
              onClick={() => handleToggleTask(task.id)} // Toggle task completion on click
              style={{
                textDecoration: task.completed ? "line-through" : "none", // Strike-through completed tasks
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            {task.dueDate && <span className={styles.dueDate}>{task.dueDate}</span>} {/* Display due date if available */}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button> {/* Delete task button */}
            <input
              type="text"
              placeholder="Edit task"
              onBlur={(e) => handleEditTask(task.id, e.target.value)} // Edit task text on blur
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
