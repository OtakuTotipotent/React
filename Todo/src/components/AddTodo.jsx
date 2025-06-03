function AddTodo({ todoFunc }) {
    const addTask = () => {
        const todoText = document.getElementById("todo-text").value;
        const todoDate = document.getElementById("todo-date").value;
        if (todoText.trim() !== "" && todoDate !== "") {
            todoFunc({ name: todoText, dueDate: todoDate });
            document.getElementById("todo-text").value = "";
            document.getElementById("todo-date").value = "";
        }
    };

    return (
        <div className="container todo-container">
            <div className="row">
                <div className="col-5">
                    <input
                        type="text"
                        id="todo-text"
                        placeholder="Enter Todo item"
                    />
                </div>
                <div className="col-5">
                    <input type="date" id="todo-date" />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={addTask}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
