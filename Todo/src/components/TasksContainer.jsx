import { useContext } from "react";
import { TodoItemsData } from "../store/TodoItemsData";
import TodoItem from "./TodoItem";
import Welcome from "./Welcome";

function TasksContainer() {
    const { data } = useContext(TodoItemsData);

    return (
        <div className="container taskContainer">
            {data.length === 0 && <Welcome />}

            {data.map((item) => (
                <TodoItem key={item.name} data={item} />
            ))}
        </div>
    );
}

export default TasksContainer;
