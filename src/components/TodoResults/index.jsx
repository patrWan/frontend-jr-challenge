import React from "react";
import { useSelector } from "react-redux";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const { todos = [] } = useSelector(state => state.todo);

  const checkTodos = todos.filter(todos => todos.checked !== false).length;

  return <div className="font-bold text-center block py-3 mb-3 border-t-2 uppercase text-lg">Done: {checkTodos}</div>;
};

export default TodoResults;
