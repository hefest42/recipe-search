import React, { useState, useEffect } from "react";

import RecipeListNavigation from "./RecipeListNavigation";
import RecipesListSkeleton from "./RecipesListSkeleton";
import Error from "./Error";

import { Link, useParams } from "react-router-dom";

// TODO set it to search based on the params
const RecipesList = ({}) => {
    const params = useParams();
    const [pageState, setPageState] = useState("recipes");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (params.search === "") return;

        const fetchRecipesHandler = async (searchTerm) => {
            try {
                setPageState("loading");

                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);

                const data = await response.json();

                setRecipes(data.recipes);
                setPageState("recipes");
            } catch (error) {}
        };

        fetchRecipesHandler(params.search);
    }, [params.search]);

    return (
        <>
            <div className="recipeList">
                {pageState === "loading" && <RecipesListSkeleton />}

                {pageState === "recipes" &&
                    recipes.map((recipe, i) => (
                        <Link to={`${recipe.recipe_id}`} key={i}>
                            <div
                                className={
                                    recipe.recipe_id === params["*"]
                                        ? "recipeList-item recipeList-active centered"
                                        : "recipeList-item centered"
                                }
                            >
                                <div className="recipeList-item__image">
                                    <img src={recipe.image_url} alt={recipe.title} />
                                </div>

                                <div className="recipeList-item__info centered-column">
                                    <h3>{recipe.title}</h3>
                                    <span>from</span>
                                    <h4 className="centered">{recipe.publisher}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>

            <RecipeListNavigation recipes={recipes} />
        </>
    );
};

export default RecipesList;
