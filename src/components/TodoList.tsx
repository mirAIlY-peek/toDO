import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
}

export default function TodoList({ todos, onToggle }: Props) {
    return (
        <ul className="bg-[#1a1a1a] rounded mb-4 overflow-hidden">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
}
