import ListHeading from "./components/ListHeading";
import ListContainer from "./components/ListContainer";
import EmptyList from "./components/EmptyList";
import InputBox from "./components/InputBox";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    const [listItems, itemStateManager] = useState([
        "Otaku Totipotent",
        "Its okay to not be okay",
        "Demon slayer season 06 download ⬇️",
        "Create new emails for business purposes & professional level",
        "Remove all empty lists",
        "Finish website project before due dates",
        "Learn SickIt Python framework",
        "Download beautiful wallpapers form desktop 🦋",
        "Mastering the crazy animations for web apps using React",
        "Open channel challenge configurations",
        "Steep learning curves myth solutions 🧠 🤯",
        "Apply for scholarships 2026 🗓️",
    ]);
    function addItemInList(event) {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            const newItem = event.target.value;
            const newListArray = [...listItems, newItem];
            itemStateManager(newListArray);
            event.target.value = "";
        }
    }

    return (
        <Container>
            <ListHeading />
            <InputBox addItemInList={addItemInList} />
            <EmptyList data={listItems} />
            <ListContainer data={listItems} />
        </Container>
    );
}

export default App;
