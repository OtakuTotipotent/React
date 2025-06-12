import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/PostListProvider";

function PostShow({ post }) {
    const { deletePost } = useContext(PostList);
    return (
        <div className="card post-card">
            <div className="card-body">
                <div className="post-text">
                    <h5 className="card-title text-warning">
                        {post.title}
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black text-warning post-delete-icon"
                            onClick={() => deletePost(post.id)}>
                            <AiFillDelete />
                        </span>
                    </h5>
                    <p className="card-text text-light">{post.body}</p>
                </div>
                <div className="post-btns">
                    {post.tags.map((tag) => (
                        <span
                            className="badge text-bg-secondary text-dark"
                            key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="post-btns">
                    <a href="#" className="btn btn-warning">
                        {post.userId}
                    </a>
                    <a href="#" className="btn btn-warning">
                        Score: {post.reactions}+
                    </a>
                    <a href="#" className="btn btn-warning">
                        Pin 📌
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PostShow;
