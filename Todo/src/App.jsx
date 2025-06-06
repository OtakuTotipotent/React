import { useState } from "react";
import { TodoItemsData } from "./store/items-data";
import AppName from "./components/AppName";
import AddTodo from "./components/UserInputBar";
import TodoContainer from "./components/TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [data, updateData] = useState([
        { name: "Todo Text", dueDate: "Task deadline" },
    ]);

    const addTodoFunc = (todoData) => {
        const newItemData = [...data, todoData];
        updateData(newItemData);
    };

    const deleteTodoFunc = (targetItem) => {
        const newItemData = data.filter(
            (element) => element.name !== targetItem.name
        );
        updateData(newItemData);
    };

    return (
        <TodoItemsData.Provider value={{ data, addTodoFunc, deleteTodoFunc }}>
            <center>
                <AppName />
                <AddTodo />
                <TodoContainer />
            </center>
        </TodoItemsData.Provider>
    );
}

export default App;
