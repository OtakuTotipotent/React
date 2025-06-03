// Imports & Packages
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import { useState } from "react";

function App() {
    const data = [
        {
            name: "Fix React Project",
            dueDate: "Jan/27/2026",
        },
        {
            name: "Complete Node JS",
            dueDate: "Mar/22/2026",
        },
        {
            name: "Go through Django",
            dueDate: "Dec/01/2025",
        },
    ];
    const [data_todo, updateDataTodo] = useState(data);
    const addDataToList = (args) => {
        const newData = [...data_todo, args];
        updateDataTodo(newData);
    };
    const deleteDataFromList = (args) => {
        const newData = data_todo.filter((obj) => {
            if (
                obj["name"] !== args["name"] &&
                obj["dueDate"] !== args["dueDate"]
            ) {
                return obj;
            }
        });
        updateDataTodo(newData);
    };
    return (
        <center>
            <AppName />
            <AddTodo todoFunc={addDataToList} />
            <TodoContainer todo={data_todo} deleteData={deleteDataFromList} />
        </center>
    );
}

export default App;
