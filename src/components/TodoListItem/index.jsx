import React from "react";
import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label }) => (
  <div className="todo-list-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
    </div>
    <button type="button" className="bg-slate-300 w-6 h-6 rounded-md hover:bg-slate-400" onClick={onDelete}>
      x
    </button>
  </div>
);

export default TodoListItem;
