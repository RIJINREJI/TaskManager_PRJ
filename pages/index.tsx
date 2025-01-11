import React from "react";
import Header from "@/components/Header";
import Counter from "@/components/Counter";
import TodoList from "@/components/TodoList";

const Home: React.FC = () => {
  return (
    <div>
      <Header title={"Task Manger"} />
      <Counter />
      <TodoList />
    </div>
  );
};

export default Home;
