import { createContext, useReducer } from "react";

export const TodoItemsData = createContext({
    data: [],
    addTask: () => {},
    deleteTask: () => {},
    // passed the structure of arguments to get auto completions 🙂
});

const reducer = (items, action) => {
    let newItems = items;
    if (action.type === "NEW_TASK") {
        const exist = items.some(
            (item) =>
                item.name === action.payload.name &&
                item.dueDate === action.payload.dueDate
        );
        if (!exist) {
            newItems = [...items, action.payload];
        }
    } else if (action.type === "DELETE_TASK") {
        newItems = items.filter(
            (element) =>
                element.name !== action.payload.name &&
                element.dueDate !== action.payload.dueDate
        );
    } else {
        console.log(
            "HEY, UNEXPECTED ACTION TYPE FOR REDUCER IN APP/TodoItemsData..."
        );
    }
    return newItems;
};

function ContextProvider({ children }) {
    const [data, dispatcher] = useReducer(reducer, [
        { name: "Todo Text is shown here", dueDate: "2025-06-06" },
        {
            name: "Have fun while completing your tasks & go 4 subscription to avail premium features, That's really amazing!",
            dueDate: "2025-06-06",
        },
    ]);
    const addTask = (todoData) => {
        dispatcher({
            type: "NEW_TASK",
            payload: todoData,
        });
    };
    const deleteTask = (targetItem) => {
        dispatcher({
            type: "DELETE_TASK",
            payload: targetItem,
        });
    };

    return (
        <TodoItemsData.Provider value={{ data, addTask, deleteTask }}>
            {children}
        </TodoItemsData.Provider>
    );
}

export default ContextProvider;
