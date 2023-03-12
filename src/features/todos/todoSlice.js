import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchTodosAsync, toggleCheckTodo, deleteTodo, addTodo } from './thunks';


function sendToast(error) {
    toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        error : '',
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.pending, (state, action) => {
            console.log('pending')
        })

        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            console.log('fulfilled',action);
            state.todos = action.payload;
        })

        builder.addCase(fetchTodosAsync.rejected, (state, action) => {
            console.log('rejected', action)

            sendToast(action.payload);
        })
        
        builder.addCase(toggleCheckTodo.fulfilled, (state, action) => {
            console.log('toggleCheckApi fulfilled')

            const findTodo = state.todos.find(todo => todo.id === action.payload.id);
            findTodo.checked = action.payload.checked;
            //state.data = action.payload;
        })

        builder.addCase(toggleCheckTodo.pending, (state, action) => {
            console.log('toggleCheckApi pending')
        })

        builder.addCase(toggleCheckTodo.rejected, (state, action) => {
            console.log(' toggleCheckApi rejected')
            state.status = 'rejected';
            sendToast(action.payload);
        })
        
        // DELETE TODO
        builder.addCase(deleteTodo.pending, (state, action) => {
            console.log('deleteTodo pending')
        })

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            console.log('deleteTodo exito')

            const newList = state.todos.filter(todo => todo.id !== action.payload);

            console.log(newList);
            state.todos = newList;
        })

        builder.addCase(deleteTodo.rejected, (state, action) => {
            console.log('deleteTodo rejected')
            sendToast(action.payload);
        })

        // ADD TODO 
        builder.addCase(addTodo.pending, (state, action) => {
            console.log('addTodo pending')
        })

        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
            console.log('addTodo exito', action.payload);

        })

        builder.addCase(addTodo.rejected, (state, action) => {
            console.log('addTodo rejected')
            sendToast(action.payload);
        })
        
    }

});


export default todoSlice.reducer;