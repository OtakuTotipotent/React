function Sidebar({ activeTab, setActiveTab }) {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
            style={{ width: "220px" }}>
            <a
                href="/"
                className="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
            </a>
            <span className="fs-5 text-warning text-center">
                Social Media 2.0
            </span>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li
                    className="nav-item"
                    onClick={() => {
                        setActiveTab("Home");
                    }}>
                    <a
                        href="#"
                        className={`nav-link ${
                            activeTab === "Home"
                                ? "active text-bg-warning text-dark"
                                : "text-white"
                        }`}
                        aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#home"></use>
                        </svg>
                        Home
                    </a>
                </li>
                <li
                    onClick={() => {
                        setActiveTab("Create Post");
                    }}>
                    <a
                        href="#"
                        className={`nav-link ${
                            activeTab === "Create Post"
                                ? "active text-bg-warning text-dark"
                                : "text-white"
                        }`}>
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#post"></use>
                        </svg>
                        Create Post
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#speedometer2"></use>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#table"></use>
                        </svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#grid"></use>
                        </svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#people-circle"></use>
                        </svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img
                        src="vite.svg"
                        alt="mdo"
                        height="32"
                        width="32"
                        className="rounded-circle me-2"
                    />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                        <a href="#" className="dropdown-item">
                            New Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown-item">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown-item">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="#" className="dropdown-item">
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
