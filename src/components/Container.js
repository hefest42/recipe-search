import React, { useState, useEffect } from "react";

import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({}) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const retrievedBookmarks = localStorage.getItem("bookmarks");

        if (!retrievedBookmarks) return;

        const parsedBookmarks = JSON.parse(retrievedBookmarks);

        setBookmarks(parsedBookmarks);
    }, []);

    return (
        <div className="container">
            <ContainerTop bookmarks={bookmarks} setBookmarks={setBookmarks} />
            <Routes>
                <Route path={`:search/*`} element={<ContainerBottom bookmarks={bookmarks} />} />
            </Routes>
        </div>
    );
};

export default Container;
