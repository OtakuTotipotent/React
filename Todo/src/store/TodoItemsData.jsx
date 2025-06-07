import { createContext } from "react";

export const TodoItemsData = createContext({
    data: [],
    addTask: () => {},
    deleteTask: () => {},
});

// passed the structure of arguments to get auto completions 🙂
