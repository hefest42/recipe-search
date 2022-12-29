import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";

const ContainerBottom = ({ bookmarks }) => {
    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList />
            </div>
            <div className="down-right">
                <Routes>
                    <Route path=":id" element={<HeroRecipe />} />
                </Routes>
            </div>
        </div>
    );
};

export default ContainerBottom;
