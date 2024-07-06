"use client";
import { deleteTodo } from "@/features/todo/todoSlice";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const allTodo = useSelector((state: RootState) => state.allTodo);
  const handleDelete = useDispatch();
  return (
    <ul className="list-none">
      {allTodo.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded gap-10"
          key={todo.id}
        >
          <p>{todo.text}</p>
          <button
            onClick={() => handleDelete(deleteTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
