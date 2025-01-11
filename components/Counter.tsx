// Import the useState hook from the 'react' library
import { useState } from "react";

// Define the Counter functional component
const Counter = () => {
  // Declare a state variable 'count' to hold the counter value and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => setCount(count + 1);
  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  // Render the Counter component
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Counter: {count}</h3>
      {/* Render the increment button */}
      <button
        onClick={increment}
        style={{
          marginRight: "10px",
          padding: "5px 10px",
          backgroundColor: "#0070f3",
          color: "#fff",
        }}
      >
        Increment
      </button>
      {/* Render the decrement button */}
      <button
        onClick={decrement}
        style={{
          padding: "5px 10px",
          backgroundColor: "#0070f3",
          color: "#fff",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

// Export the Counter component as the default export
export default Counter;
