import type { Filter } from "../types/todo.ts";

interface Props {
    active: Filter;
    setFilter: (filter: Filter) => void;
}

export default function FilterTabs({ active, setFilter }: Props) {
    return (
        <div className="flex w-full flex-col gap-4 mt-4 text-sm">
            {["all", "active", "completed"].map((filter_name) => (
                <button
                    key={filter_name}
                    onClick={() => setFilter(filter_name as Filter)}
                    className={
                        active === filter_name
                            ? "text-blue-400 font-bold"
                            : "text-gray-400 hover:underline"
                    }
                >
                    {filter_name}
                </button>
            ))}
        </div>
    );
}
