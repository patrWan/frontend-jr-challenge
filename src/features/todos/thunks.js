import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";

export const fetchTodosAsync = createAsyncThunk('todo/fetch', async (_, { rejectWithValue }) => {

    return axios.get(baseURL).then((response) => { return response.data; })
        .catch(function (error) {
            // handle error
            return rejectWithValue(error.message);
        });
}
)

export const toggleCheckTodo = createAsyncThunk('todo/toggleCheck', async ({todoId, isChecked}, { rejectWithValue }) => {

    return axios.patch(`${baseURL}/${todoId}`,{
        checked: !isChecked
    })
        .then((response) => { return response.data; })
        .catch(function (error) {
            // handle error
            return rejectWithValue(error.message);
        });
}
)

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoId, { rejectWithValue }) => {

    return axios.delete(`${baseURL}/${todoId}`)
        .then((response) => { return todoId; })
        .catch(function (error) {
            // handle error
            return rejectWithValue(error.message);
        });
}
)

export const addTodo = createAsyncThunk('todo/addTodo', async (todo, { getState, rejectWithValue }) => {
    const state = getState();
    const newTodo = {
        id : Math.floor(Math.random() * Date.now()),
        label : todo,
        checked : false,
    }
    console.log(newTodo)
    return axios.post(`${baseURL}`,
        newTodo,
    )
        .then((response) => { return response.data; })
        .catch(function (error) {
            // handle error
            return rejectWithValue(error.message);
        });
}
)
