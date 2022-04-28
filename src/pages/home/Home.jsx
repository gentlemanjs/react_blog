import React from "react";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";

export default function Home() {
    return (
        <>
            <main id="main">
                <Posts />
                <Side />
            </main>
        </>
    );
}
