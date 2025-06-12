function Header() {
    return (
        <header className="p-3 text-bg-dark header">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0 justify-content-center">
                        <li>
                            <a href="#" className="nav-link px-2 text-warning">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-white">
                                About
                            </a>
                        </li>
                    </ul>
                    <form
                        className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                        role="search">
                        <input
                            className="form-control form-control-dark text-bg-dark text-warning"
                            type="search"
                            placeholder="search anything here..."
                            aria-label="search"
                        />
                    </form>
                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-outline-light me-2">
                            Login
                        </button>
                        <button type="button" className="btn btn-warning">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
