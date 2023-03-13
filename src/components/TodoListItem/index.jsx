import React from "react";

const TodoListItem = ({ onCheck, checked, onDelete, label }) => (
  <div className="flex items-center justify-between w-full mt-0 mr-auto mb-1 cursor-pointer">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="flex items-center justify-center flex-nowrap pt-1 pr-2 pb-1 pl-1 hover:bg-slate-100"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
        className="mr-1"
      />
      <span className={checked ? "line-through" : ""}>{label}</span>
    </div>
    <button type="button" className="bg-slate-300 w-6 h-6 flex-shrink rounded-sm hover:bg-slate-400" onClick={onDelete}>
      x
    </button>
  </div>
);

export default TodoListItem;
