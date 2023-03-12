import React, { useState } from "react";

import { addTodo } from "features/todos";

import { useDispatch } from "react-redux";

import "./styles.css";

const TodoForm = () => {
    const dispatch = useDispatch();

    const [inputTodo, setInputTodo] = useState('');



    function handleInput(e) {
        setInputTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submit");
        setInputTodo('')
        dispatch(addTodo(inputTodo));

        
    }

    return (
        <div className="todo-form">
            <div className="todo-form-content">
                <form action="" onSubmit={handleSubmit} className="todo-form-content">
                    <input 
                        type="text" 
                        placeholder="Enter new to do" 
                        value={inputTodo}
                        onChange={handleInput} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mr-5 focus:shadow-outline focus:border-blue-500"
                    />
                    <input 
                        type="submit" 
                        disabled={inputTodo !== '' ? false : true}
                        className="
                         bg-blue-500
                         hover:bg-blue-700 
                         text-white 
                         font-bold 
                         py-2 px-4 rounded 
                         focus:outline-none 
                         focus:shadow-outline 
                         cursor-pointer 
                         disabled:bg-zinc-300 disabled:cursor-default" 
                    />
                </form>
            </div>

        </div>
    )

};

export default TodoForm;