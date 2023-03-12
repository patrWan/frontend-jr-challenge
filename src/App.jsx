import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";

import "./App.css";

import { fetchTodosAsync } from "features/todos";

import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  return (
    <div className="max-w-2xl m-auto">
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  );
};

export default App;
