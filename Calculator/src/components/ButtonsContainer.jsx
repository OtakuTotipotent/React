import styles from "./ButtonsContainer.module.css";

function showTheBtn(btn, onBtnClick) {
    if (isNaN(btn)) {
        return (
            <button
                key={btn}
                className={`${styles.btn} ${styles.symbol}`}
                onClick={() => onBtnClick(btn)}>
                {btn}
            </button>
        );
    } else {
        return (
            <button
                key={btn}
                className={`${styles.btn} ${styles.num}`}
                onClick={() => onBtnClick(btn)}>
                {btn}
            </button>
        );
    }
}

function ButtonsContainer({ buttons, onBtnClick }) {
    return (
        <div className={styles.btnContainer}>
            {buttons.map((btn) => showTheBtn(btn, onBtnClick))}
        </div>
    );
}

export default ButtonsContainer;
