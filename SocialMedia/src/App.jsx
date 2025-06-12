import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/PostListProvider";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostCreate from "./components/PostCreate";
import Footer from "./components/Footer";

function App() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="app-container">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="app-content">
                    <Header />

                    {activeTab === "Home" ? <PostsList /> : <PostCreate />}

                    <Footer />
                </div>
            </div>
        </PostListProvider>
    );
}

export default App;
