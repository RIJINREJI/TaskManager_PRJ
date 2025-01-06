interface TaskListProps {
    tasks: string[];
  }
  
  const TaskList = ({ tasks }: TaskListProps) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>Your Tasks</h3>
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
  
  export default TaskList;
  