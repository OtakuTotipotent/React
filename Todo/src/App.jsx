import AppName from "./components/AppName";
import UserInputBar from "./components/UserInputBar";
import TasksContainer from "./components/TasksContainer";
import "./App.css";
import ContextProvider from "./store/TodoItemsData";

function App() {
    return (
        <ContextProvider>
            <AppName />
            <UserInputBar />
            <TasksContainer />
        </ContextProvider>
    );
}

export default App;
