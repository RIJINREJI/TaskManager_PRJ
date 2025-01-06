import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Counter: {count}</h3>
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

export default Counter;
