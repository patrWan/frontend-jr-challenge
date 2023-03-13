import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchTodosAsync, toggleCheckTodo, deleteTodo, addTodo } from './thunks';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            //console.log('fetchTodosAsync fulfilled');
            state.todos = action.payload;
        })

        builder.addCase(toggleCheckTodo.fulfilled, (state, action) => {
            //console.log('toggleCheckApi fulfilled')

            const findTodo = state.todos.find(todo => todo.id === action.payload.id);
            
            findTodo.checked = action.payload.checked;
            //state.data = action.payload;
        })

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            //console.log('deleteTodo exito')

            const newList = state.todos.filter(todo => todo.id !== action.payload);

            state.todos = newList;

            toast.info("Task deleted successfully !", {
                position: toast.POSITION.TOP_CENTER
            });
        })

        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.todos = [...state.todos, action.payload];
            toast.success("Task added successfully !", {
                position: toast.POSITION.TOP_CENTER
            });
        })

        builder.addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state, action) => {
                //sendToast(action.payload);
            }
        )

        builder.addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state, action) => {
                toast.error(action.payload, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        )

    }

});


export default todoSlice.reducer;