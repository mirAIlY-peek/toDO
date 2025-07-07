import type { Todo } from "../types/todo";


interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
}

export default function TodoItem({ todo, onToggle }: Props) {
    return (
        <li
            className="flex items-center justify-between p-2 border-b border-gray-700 cursor-pointer hover:bg-[#1f1f1f]"
            onClick={() => onToggle(todo.id)}
        >
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
        </li>
    );
}
