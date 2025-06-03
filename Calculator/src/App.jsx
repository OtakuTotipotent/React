import { useState } from "react";
import "./app.css";
import Container from "./components/container";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
    const [expression, setValue] = useState("");
    const buttons = [
        "C",
        "X",
        "=",
        "♻️",
        1,
        2,
        3,
        "+",
        4,
        5,
        6,
        "-",
        7,
        8,
        9,
        "/",
        0,
        "000",
        ".",
        "*",
        "%",
        "^",
        "$",
        "&",
    ];
    const valueOnClick = (btnText) => {
        if (btnText === "C") {
            setValue("");
        } else if (btnText === "=") {
            const answer = eval(expression);
            setValue(answer);
        } else if (btnText === "♻️") {
            setValue("History being saved...");
        } else {
            const newVal = expression + btnText;
            setValue(newVal);
        }
    };

    return (
        <Container>
            <Display exp={expression}></Display>
            <ButtonsContainer
                buttons={buttons}
                onBtnClick={valueOnClick}></ButtonsContainer>
        </Container>
    );
}

export default App;
