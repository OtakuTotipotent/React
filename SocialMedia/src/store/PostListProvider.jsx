import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
    {
        id: "1",
        title: "FSc Examinations 📃",
        body: "In Pakistan, the Intermediate examinations are the best test system conducted for judging student's knowledge, skills, stamina, creativity & interests.",
        reactions: 77,
        userId: "user_0",
        tags: [
            "pakistan",
            "fsc",
            "ics",
            "intermediate",
            "exams",
            "examinations",
            "test",
            "system",
            "skills",
            "interests",
            "board",
        ],
    },
    {
        id: "2",
        title: "Books Reading 📚",
        body: "This continuously evolving world has seen a lot of harsh and peaceful circumstances and these circumstances always give birth to the legendary minds. To get best out of this life, you should read the content written by that minds in the form of Books.",
        reactions: 87,
        userId: "user_8",
        tags: ["books", "reading", "content", "life"],
    },
];

const reducer = (curVal, action) => {
    let newVal = curVal;
    if (action.type === "DELETE_POST") {
        newVal = curVal.filter((item) => item.id !== action.payload.postId);
    }
    return newVal;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatcher] = useReducer(reducer, DEFAULT_POST_LIST);

    const addPost = () => {
        dispatcher({ type: "ADD_POST", payload: "" });
    };
    const deletePost = (postId) => {
        dispatcher({ type: "DELETE_POST", payload: { postId } });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
