// Import React library
import React from "react";
// Import Header component
import Header from "@/components/Header";
// Import Counter component
import Counter from "@/components/Counter";
// Import TodoList component
import TodoList from "@/components/TodoList";

// Define the Home functional component
const Home: React.FC = () => {
  // Render the Home component
  return (
    <div>
      {/* Render the Header component with a title prop */}
      <Header title={"Task Manager"} />
      {/* Render the Counter component */}
      <Counter />
      {/* Render the TodoList component */}
      <TodoList />
    </div>
  );
};

// Export the Home component as the default export
export default Home;

