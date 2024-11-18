import { useState, FormEvent } from "react";
import TodoList from "./TodoList";
import "./App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";


function App() {
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task))
      setTask("");
    }
  };



  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
