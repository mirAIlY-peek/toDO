import { useState } from "react";

interface Props {
    onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New task..."
                className="flex-1 p-2 rounded bg-[#1f1f1f] text-white border border-gray-600"
            />
            <button type="submit" className="bg-blue-600 px-4 rounded text-white">
                Add
            </button>
        </form>
    );
}
