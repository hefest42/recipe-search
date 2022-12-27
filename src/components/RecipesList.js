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
    const [displayedRecipes, setDisplayedRecipes] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (params.search === "") return;

        const fetchRecipesHandler = async (searchTerm) => {
            try {
                setPageState("loading");

                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);

                const data = await response.json();

                setRecipes(data.recipes);
                setDisplayedRecipes(data.recipes.slice(0, 7));
                setPageState("recipes");
            } catch (error) {}
        };

        fetchRecipesHandler(params.search);
    }, [params.search]);

    useEffect(() => {
        const index = recipes.findIndex((recipe) => recipe.recipe_id === params["*"]);

        if (page === Math.floor(index / 7)) return;
    }, [page]);

    return (
        <>
            <div className="recipeList">
                {pageState === "loading" && <RecipesListSkeleton />}

                {pageState === "recipes" &&
                    displayedRecipes.map((recipe, i) => (
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

            <RecipeListNavigation recipes={recipes} setDisplayedRecipes={setDisplayedRecipes} />
        </>
    );
};

export default RecipesList;
