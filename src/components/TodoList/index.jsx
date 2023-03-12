import React from "react";
import TodoListItem from "components/TodoListItem";
import Toast from "components/Toast";

import { toggleCheckTodo, deleteTodo } from "features/todos";

import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos = [] } = useSelector(state => state.todo);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    dispatch(deleteTodo(todoId))
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    dispatch(toggleCheckTodo( {todoId, isChecked }));

  };

  return (
    <div className="p-5">
      <Toast/>
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        {
          todos.map(todo => (
            <TodoListItem
              key={todo.id}
              label={todo.label}
              checked={todo.checked}
              onCheck={() => toggleCheck(todo.id, todo.checked)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))
        }
      </div>
      <div className="no-todos">
        {todos.length !== 0?  "" : "Looks like you are absolutely free today!"}
      </div>
    </div>
  );
};

export default TodoList;
