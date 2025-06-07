import { useContext } from "react";
import { TodoItemsData } from "../store/TodoItemsData";

function TodoItem({ data }) {
    const { deleteTask } = useContext(TodoItemsData);
    return (
        <div className="container item">
            <div className="an-item">{data.name}</div>
            <div className="an-item date">{data.dueDate}</div>
            <div>
                <button className="btn del" onClick={() => deleteTask(data)}>
                    Done
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
