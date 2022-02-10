import React from "react";

import { Link } from "react-router-dom";

const RecipesList = ({ recipes, searchTerm }) => {
    return (
        <div className="recipeList">
            <Link to={"/fuckme"}>
                <div className="recipeList-item centered">
                    <div className="recipeList-item__image">
                        <img src={recipes[0].imageUrl} alt={recipes[0].title} />
                    </div>

                    <div className="recipeList-item__info centered-column">
                        <h3>{recipes[0].title}</h3>
                        <span>from</span>
                        <h4 className="centered">{recipes[0].publisher}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipesList;
