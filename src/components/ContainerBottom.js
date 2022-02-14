import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";

const ContainerBottom = () => {
    const [recipeID, setRecipeID] = useState("");

    const getRecipeIDHandler = id => {
        setRecipeID(id);
    };

    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList getRecipeID={recipeID} />
            </div>
            <div className="down-right">
                <Routes>
                    <Route path=":id" element={<HeroRecipe getID={getRecipeIDHandler} />} />
                </Routes>
            </div>
        </div>
    );
};

export default ContainerBottom;
