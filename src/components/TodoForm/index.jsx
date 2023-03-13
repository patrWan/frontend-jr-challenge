import React, { useState } from "react";

import { addTodo } from "features/todos";

import { useDispatch } from "react-redux";

const TodoForm = () => {
    const dispatch = useDispatch();

    const [inputTodo, setInputTodo] = useState('');

    function handleInput(e) {
        setInputTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(inputTodo));
        setInputTodo('')
        console.log('dasdasdadsad')
    }

    return (
        <div className="py-3">
            <div className="flex justify-center">
                <form action="" onSubmit={handleSubmit} className="flex">
                    <input
                        type="text"
                        placeholder="Enter new to do"
                        value={inputTodo}
                        onChange={handleInput}
                        className="shadow border rounded w-full p-3 mx-5 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
                    />
                    <input
                        type="submit"
                        disabled={inputTodo !== '' ? false : true}
                        className="
                         bg-blue-500
                         hover:bg-blue-700 
                         text-white 
                         font-bold 
                         py-3 px-4 rounded 
                         focus:outline-none 
                         focus:shadow-outline 
                         cursor-pointer 
                         disabled:bg-zinc-300 disabled:cursor-default"
                        value="Add to do"
                    />
                </form>
            </div>

        </div>
    )

};

export default TodoForm;