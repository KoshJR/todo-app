
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo } from "./redux/todoSlice";
import { RootState } from "./redux/store";

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

    const handleDelete = (id: number) => {
      dispatch(deleteTodo(id));
    };
  
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
