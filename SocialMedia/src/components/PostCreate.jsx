function PostCreate() {
    return (
        <form className="p-3 row-cols-lg-3 row-cols-md-2">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    id="exampleInputEmail1"
                    className="form-control"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    id="exampleInputPassword1"
                    className="form-control"
                />
            </div>
            <div className="mb-5 form-check">
                <label htmlFor="exampleCheck1" className="form-check-input">
                    Check me out
                </label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <button type="submit" className="btn btn-warning mx-5">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default PostCreate;
