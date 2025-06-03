import styles from "./InputBox.module.css";
function InputBox({ addItemInList }) {
    return (
        <input
            className={styles.inputBox}
            type="text"
            placeholder="Press 'Enter' to add items in list"
            onKeyDown={addItemInList}
        />
    );
}

export default InputBox;
