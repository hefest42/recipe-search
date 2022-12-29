import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";

const ContainerBottom = ({ bookmarks, managingBookmarks }) => {
    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList />
            </div>
            <div className="down-right">
                <Routes>
                    <Route
                        path=":id"
                        element={<HeroRecipe bookmarks={bookmarks} managingBookmarks={managingBookmarks} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default ContainerBottom;
