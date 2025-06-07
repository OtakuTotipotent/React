import { useState } from "react";
import { TodoItemsData } from "./store/TodoItemsData";
import AppName from "./components/AppName";
import UserInputBar from "./components/UserInputBar";
import TasksContainer from "./components/TasksContainer";
import "./App.css";

function App() {
    const [data, updateData] = useState([
        { name: "Todo Text is shown here", dueDate: "2025-06-06" },
        {
            name: "Have fun while completing your tasks & go 4 subscription to avail premium features, That's really amazing!",
            dueDate: "2025-06-06",
        },
    ]);
    const addTask = (todoData) => {
        const exist = data.some(
            (item) =>
                item.name === todoData.name && item.dueDate === todoData.dueDate
        );
        if (!exist) {
            const newItemData = [...data, todoData];
            updateData(newItemData);
        }
    };
    const deleteTask = (targetItem) => {
        const newItemData = data.filter(
            (element) => element.name !== targetItem.name
        );
        updateData(newItemData);
    };

    return (
        <TodoItemsData.Provider value={{ data, addTask, deleteTask }}>
            <AppName />
            <UserInputBar />
            <TasksContainer />
        </TodoItemsData.Provider>
    );
}

export default App;
