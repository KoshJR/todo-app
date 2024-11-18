import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";


interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export  default todosSlice.reducer