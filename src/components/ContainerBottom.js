import React, { useEffect, useState } from "react";

import { Routes, Route, useParams } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";

const ContainerBottom = ({}) => {
    const params = useParams();
    const [recipeID, setRecipeID] = useState("");

    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList />
            </div>
            <div className="down-right">
                <Routes>
                    <Route path=":id" element={<HeroRecipe setRecipeID={setRecipeID} />} />
                </Routes>
            </div>
        </div>
    );
};

export default ContainerBottom;
