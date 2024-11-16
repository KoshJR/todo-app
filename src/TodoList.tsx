import React, { FC } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "./redux/store";

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todos.todos);
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
