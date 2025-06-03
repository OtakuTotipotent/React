import TodoItem from "./TodoItem";

function TodoContainer({ todo, deleteData }) {
    return (
        <div className="container my-4 item-container">
            {todo.map((item) => (
                <TodoItem key={item.name} data={item} deleteData={deleteData} />
            ))}
        </div>
    );
}

export default TodoContainer;
