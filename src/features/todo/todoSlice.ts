import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
}

const initialState: {
  allTodo: Todo[];
} = {
  allTodo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //add todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.allTodo.push(todo);
    },
    //delete todo
    deleteTodo: (state, action) => {
      state.allTodo = state.allTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
