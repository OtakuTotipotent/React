import { useRef } from "react";

function AddTodo({ addTodoFunc }) {
    const todoTextInput = useRef("");
    const todoDateInput = useRef("");

    const addTodoHandler = (event) => {
        event.preventDefault();
        const todoText = todoTextInput.current.value;
        const todoDate = todoDateInput.current.value;
        todoTextInput.current.value = "";
        todoDateInput.current.value = "";

        addTodoFunc({
            name: todoText,
            dueDate: todoDate,
        });
    };

    return (
        <div className="container todo-container">
            <form className="row" onSubmit={addTodoHandler}>
                <div className="col-5">
                    <input
                        type="text"
                        id="todo-text"
                        placeholder="Enter Todo item"
                        required
                        ref={todoTextInput}
                    />
                </div>
                <div className="col-5">
                    <input
                        type="date"
                        id="todo-date"
                        ref={todoDateInput}
                        required
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;
