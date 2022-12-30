import React, { useState, useEffect } from "react";

import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({}) => {
    const [bookmarks, setBookmarks] = useState([]);

    const managingBookmarks = (bookmark) => {
        if (bookmarks.filter((bm) => bm.recipeId === bookmark.recipeId).length === 1) {
            const filteredBookmarks = bookmarks.filter((bm) => bm.recipeId !== bookmark.recipeId);
            const newBookmarks = JSON.stringify(filteredBookmarks);

            setBookmarks(filteredBookmarks);
            localStorage.setItem("bookmarks", newBookmarks);
        } else {
            const addNewBookmark = [...bookmarks, bookmark];
            const newBookmarks = JSON.stringify(addNewBookmark);

            setBookmarks(addNewBookmark);
            localStorage.setItem("bookmarks", newBookmarks);
        }
    };

    useEffect(() => {
        const retrievedBookmarks = localStorage.getItem("bookmarks");

        if (!retrievedBookmarks) return;

        const parsedBookmarks = JSON.parse(retrievedBookmarks);

        setBookmarks(parsedBookmarks);
    }, []);

    return (
        <div className="container">
            <ContainerTop bookmarks={bookmarks} managingBookmarks={managingBookmarks} />
            <Routes>
                <Route
                    path={`:search/*`}
                    element={<ContainerBottom bookmarks={bookmarks} managingBookmarks={managingBookmarks} />}
                />
            </Routes>
        </div>
    );
};

export default Container;
