import React, { useEffect, useState } from "react";

import { Routes, Route, useParams } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";
import RecipeListNavigation from "./RecipeListNavigation";

const ContainerBottom = ({}) => {
    const params = useParams();
    const [recipeID, setRecipeID] = useState("");

    console.log(params);

    useEffect(() => {
        if (params.search === "") return;
    }, [params.search]);

    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList getRecipeID={recipeID} />
                {/* <RecipeListNavigation /> */}
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
