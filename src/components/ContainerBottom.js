import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";

const ContainerBottom = ({ acc, loggedInBookmarks, onUpdateAccountBookmarks }) => {
    const [recipeID, setRecipeID] = useState("");

    return (
        <div className="down centered">
            <div className="down-left">
                <RecipesList getRecipeID={recipeID} />
            </div>
            <div className="down-right">
                <Routes>
                    <Route
                        path=":id"
                        element={
                            <HeroRecipe
                                account={acc}
                                setRecipeID={setRecipeID}
                                accountBookmarks={loggedInBookmarks}
                                updateAccountBookmarks={onUpdateAccountBookmarks}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default ContainerBottom;
