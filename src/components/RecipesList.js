import React, { useState, useEffect } from "react";

import RecipeListNavigation from "./RecipeListNavigation";
import RecipesListSkeleton from "./RecipesListSkeleton";
import Error from "./Error";

import { Link, useParams } from "react-router-dom";

// TODO set it to search based on the params
const RecipesList = ({}) => {
    const params = useParams();
    const [pageState, setPageState] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [displayedRecipes, setDisplayedRecipes] = useState([]);
    const [page, setPage] = useState(0);

    const initialPageHandler = (allRecipes, id) => {
        setPage((state) => state - 1);
        const index = allRecipes.findIndex((recipe) => recipe.recipe_id === id);

        const startingPage = Math.ceil((index + 1) / 7);

        if (index === 0 || index === -1) setPage(1);
        else setPage(startingPage);
    };

    useEffect(() => {
        if (params.search === "" || params.search === "hero") return;

        const fetchRecipesHandler = async (searchTerm) => {
            try {
                setPageState("loading");

                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);

                if (!response.ok) throw new Error();

                const data = await response.json();

                setRecipes(data.recipes);
                initialPageHandler(data.recipes, params["*"]);

                setTimeout(() => {
                    setPageState("recipes");
                }, 500);
            } catch (error) {
                setPageState("error");
                setDisplayedRecipes([]);
            }
        };

        fetchRecipesHandler(params.search);
    }, [params.search]);

    useEffect(() => {
        const start = (page - 1) * 7;
        const end = page * 7;

        const slicedRecipes = recipes.slice(start, end);

        setDisplayedRecipes(slicedRecipes);
    }, [page]);

    return (
        <>
            <div className="recipeList">
                {pageState === "loading" && <RecipesListSkeleton />}

                {pageState === "error" && <Error errorMessage={"Could not find any recipes..."} />}

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

            {displayedRecipes.length > 0 && (
                <RecipeListNavigation
                    recipes={recipes}
                    page={page}
                    setPage={setPage}
                    setDisplayedRecipes={setDisplayedRecipes}
                />
            )}
        </>
    );
};

export default RecipesList;
