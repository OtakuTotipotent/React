import styles from "./Display.module.css";
function Display({ exp }) {
    return (
        <input
            className={styles.displayScreen}
            type="text"
            placeholder="Press buttons for Interaction"
            readOnly
            value={exp}
        />
    );
}

export default Display;
