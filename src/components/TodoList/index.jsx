import React from "react";
import TodoListItem from "components/TodoListItem";
import Toast from "components/Toast";

import { toggleCheckTodo, deleteTodo } from "features/todos";

import { useDispatch, useSelector } from "react-redux";

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
      <span className="font-bold text-center block py-3 mb-3 border-b-2 uppercase text-lg">Things to do:</span>
      <div className="flex flex-col">
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
      <div className="py-3 text-sm text-gray-400 text-center">
        {todos.length !== 0?  "" : "Looks like you are absolutely free today!"}
      </div>
    </div>
  );
};

export default TodoList;
