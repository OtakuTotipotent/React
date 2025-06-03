import ListItems from "./ListItem";

function ListContainer({ data }) {
    return (
        <ul className="list-group">
            {data.map((item) => (
                <ListItems key={item} itemContent={item} />
            ))}
        </ul>
    );
}

export default ListContainer;
