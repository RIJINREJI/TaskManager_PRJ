import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import styles from "@/styles/TodoList.module.css"; // Import CSS for component styling

// Define the structure of a task
interface Task {
  id: number; // Unique identifier for the task
  text: string; // Description of the task
  completed: boolean; // Task's completion status
}

const TodoList: React.FC = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // State to manage the input value for adding new tasks
  const [newTask, setNewTask] = useState("");

  // State to manage the filter type (all, completed, or pending tasks)
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks"); // Retrieve tasks from localStorage
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); // Parse the string into tasks and set state
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert tasks to JSON and store
  }, [tasks]);

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    const task: Task = { id: Date.now(), text: newTask, completed: false }; // Create a new task object
    setTasks([...tasks, task]); // Append the new task to the existing list
    setNewTask(""); // Clear the input field after adding
  };

  // Function to toggle the completion status of a task
  const handleToggleTask = (id: number) => {
    // Update the specific task by flipping its `completed` status
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task from the list
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove the task with the matching ID
  };

  // Filter the tasks based on the selected filter type
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed; // Show completed tasks
    if (filter === "pending") return !task.completed; // Show pending tasks
    return true; // Show all tasks by default
  });

  return (
    <div className={styles.container}>
      {/* Title section */}
      <h2>To-Do List</h2>

      {/* Input section to add new tasks */}
      <div className={styles.inputContainer}>
        {/* Input field for typing the new task */}
        <input
          type="text"
          placeholder="Add a new task" // Placeholder for the input
          value={newTask} // Bind the input value to state
          onChange={(e) => setNewTask(e.target.value)} // Update state on user input
        />
        {/* Button to add the new task */}
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Filter section for toggling between task views */}
      <div className={styles.filters}>
        {/* Button to view all tasks */}
        <button
          onClick={() => setFilter("all")} // Set filter to "all"
          className={filter === "all" ? styles.active : ""} // Highlight if active
        >
          All
        </button>
        {/* Button to view only completed tasks */}
        <button
          onClick={() => setFilter("completed")} // Set filter to "completed"
          className={filter === "completed" ? styles.active : ""} // Highlight if active
        >
          Completed
        </button>
        {/* Button to view only pending tasks */}
        <button
          onClick={() => setFilter("pending")} // Set filter to "pending"
          className={filter === "pending" ? styles.active : ""} // Highlight if active
        >
          Pending
        </button>
      </div>

      {/* Task list section */}
      <ul className={styles.taskList}>
        {/* Loop through the filtered tasks and display each task */}
        {filteredTasks.map((task) => (
          <li
            key={task.id} // Unique key for each list item
            style={{
              textDecoration: task.completed ? "line-through" : "none", // Strike-through if completed
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            {/* Task text, clicking toggles completion */}
            <span
              onClick={() => handleToggleTask(task.id)} // Toggle task completion on click
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            {/* Delete button for each task */}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
