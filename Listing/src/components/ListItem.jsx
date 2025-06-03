import styles from "./ListItem.module.css";

function ListItems({ itemContent }) {
    return (
        <li
            className={`list-group-item ${styles.listItem} bg-dark text-light`}
            key={itemContent}>
            {itemContent}
        </li>
    );
}

export default ListItems;
