import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterTabs from "./components/FilterTabs";
import type { Todo,Filter } from "./types/todo.ts";



function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<Filter>("all");

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prev)=> [newTodo, ...prev]);
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    const remaining = todos.filter((t) => !t.completed).length;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#242424] text-white">
            <div className="w-full max-w-md p-4 bg-[#2e2e2e] rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">ToDoTz</h1>
                <TodoInput onAdd={addTodo} />
                <TodoList todos={filteredTodos} onToggle={toggleTodo} />
                <div className="flex justify-between items-center mt-4 text-sm">
                    <span>{remaining} tasks left</span>
                    <button
                        onClick={clearCompleted}
                        className="text-red-400 hover:underline"
                    >
                        Clear completed
                    </button>
                </div>
                <FilterTabs active={filter} setFilter={setFilter} />
            </div>
        </div>
    );
}

export default App;
