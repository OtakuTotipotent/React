import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostCreate from "./components/PostCreate";
import PostsList from "./components/PostsList";
import Sidebar from "./components/Sidebar";

function App() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <div className="app-container">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="app-content">
                <Header />

                {activeTab === "Home" ? <PostsList /> : <PostCreate />}

                <Footer />
            </div>
        </div>
    );
}

export default App;
