import { useContext } from "react";
import TodoItem from "./TodoItem";
import Welcome from "./Welcome";
import { TodoItemsData } from "../store/items-data";

function TodoContainer({ deleteTodoFunc }) {
    const { data } = useContext(TodoItemsData);

    return (
        <div className="container my-4 item-container ">
            {data.length === 0 && <Welcome />}

            {data.map((item) => (
                <TodoItem
                    key={item.name}
                    data={item}
                    deleteData={deleteTodoFunc}
                />
            ))}
        </div>
    );
}

export default TodoContainer;
