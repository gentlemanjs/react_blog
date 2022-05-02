import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function Posts() {
    return (
        <div className="blog__posts section">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
