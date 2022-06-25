import React, { useState, useEffect } from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({ account }) => {
    const [loggedInAccountBookmarks, setLoggedInAccountBookmarks] = useState([...account.bookmarks]);

    const loggedInAccountBookmarksHandler = (id, recipe) => {
        if (loggedInAccountBookmarks.filter((bm) => bm.recipeId === id).length === 1) {
            setLoggedInAccountBookmarks((state) => state.filter((bm) => bm.recipeId !== id));
        } else {
            setLoggedInAccountBookmarks((state) => [...state, recipe]);
        }
    };

    useEffect(() => {
        fetch(`https://recipedb-3c8b3-default-rtdb.europe-west1.firebasedatabase.app/accounts/${account.accountKey}.json`, {
            method: "PATCH",
            body: JSON.stringify({ bookmarks: loggedInAccountBookmarks }),
            headers: {
                "CONTENT-TYPE": "application/json",
            },
        });
    }, [loggedInAccountBookmarks, account]);

    return (
        <div className="container">
            <ContainerTop
                loggedInAccount={account}
                accountBookmarks={loggedInAccountBookmarks}
                onUpdateAccountBookmarks={loggedInAccountBookmarksHandler}
            />
            <Routes>
                <Route
                    path={`:search/*`}
                    element={
                        <ContainerBottom loggedInBookmarks={loggedInAccountBookmarks} onUpdateAccountBookmarks={loggedInAccountBookmarksHandler} />
                    }
                />
            </Routes>
        </div>
    );
};

export default Container;
