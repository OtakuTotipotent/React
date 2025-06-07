import { useContext, useRef } from "react";
import { TodoItemsData } from "../store/TodoItemsData";

function UserInputBar() {
    const textRef = useRef("");
    const dateRef = useRef("");
    const { addTask } = useContext(TodoItemsData);

    const taskHandler = (event) => {
        event.preventDefault();
        const todoText = textRef.current.value;
        const todoDate = dateRef.current.value;
        textRef.current.value = "";
        dateRef.current.value = "";

        addTask({
            name: todoText,
            dueDate: todoDate,
        });
    };

    return (
        <form className="container form" onSubmit={taskHandler}>
            <input
                type="text"
                placeholder="Enter Todo item"
                required
                ref={textRef}
            />
            <input type="date" ref={dateRef} required />
            <button className="btn add" type="submit">
                Add
            </button>
        </form>
    );
}

export default UserInputBar;
