import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const { todos = [] } = useSelector(state => state.todo);

  const checkTodos = todos.filter(todos => todos.checked !== false).length;

  return <div className="todo-results">Done: {checkTodos}</div>;
};

export default TodoResults;
