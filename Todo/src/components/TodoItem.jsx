function TodoItem({ data, deleteData }) {
    const dataDeletionFunc = () => {
        deleteData(data);
    };
    return (
        <div className="row text-center my-2">
            <div className="col-5">{data.name}</div>
            <div className="col-5">{data.dueDate}</div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={dataDeletionFunc}>
                    Del
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
