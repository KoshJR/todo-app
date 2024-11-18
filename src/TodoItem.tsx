import React, {FC} from 'react'
import { Todo } from './types';

interface TodoItem {
    todo: Todo;
    onDelete: (id: number) => void; 
}

const TodoItem: FC<TodoItem> = ({ todo, onDelete }) => {
    return (
        <li>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem