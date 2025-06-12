import { useContext } from "react";
import PostShow from "./PostShow";
import { PostList as ListData } from "../store/PostListProvider";

function PostsList() {
    const { postList } = useContext(ListData);

    return (
        <div className="d-flex flex-wrap post-container">
            {postList.map((post) => (
                <PostShow key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsList;
