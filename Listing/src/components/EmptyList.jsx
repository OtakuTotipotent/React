// import styles from "./EmptyList.module.css";

function EmptyList({ data }) {
    return (
        <>
            {data.length === 0 && (
                <h6
                    className={`text-danger list-group-item mx-2 mt-3 text-center`}>
                    No items found in the list.
                </h6>
            )}
        </>
    );
}

export default EmptyList;
