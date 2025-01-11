// Define the TaskListProps interface with a tasks property
interface TaskListProps {
  tasks: string[];
}

// Define the TaskList functional component
const TaskList = ({ tasks }: TaskListProps) => {
  // Render the TaskList component
  return (
    <div style={{ marginTop: "20px" }}>
      {/* Render the heading for the TaskList */}
      <h3>Your Tasks</h3>
      {/* Conditionally render the list of tasks or a message if there are no tasks */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ padding: "5px", borderBottom: "1px solid #ddd" }}>
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add some tasks!</p>
      )}
    </div>
  );
};

// Export the TaskList component as the default export
export default TaskList;
