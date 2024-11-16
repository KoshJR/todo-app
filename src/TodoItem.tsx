import React, {FC} from 'react'
import { Todo } from './types';

interface TodoItem {
    todo: Todo;
    deleteTodo: (id: number) => void; 
}

const TodoItem: FC<TodoItem> = ({ todo, deleteTodo }) => {
    return (
        <li>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem