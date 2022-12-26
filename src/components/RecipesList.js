import React, { useState, useEffect } from "react";

import RecipeListNavigation from "./RecipeListNavigation";
import RecipesListSkeleton from "./RecipesListSkeleton";
import Error from "./Error";

import { Link, useParams } from "react-router-dom";

// TODO set it to search based on the params
const RecipesList = ({ getRecipeID }) => {
    const params = useParams();
    const [pageState, setPageState] = useState("loading");
    const [recipes, setRecipes] = useState([]);
    const [slicedRecipes, setSlicedRecipes] = useState([]);
    const [page, setPage] = useState(0);

    const { search } = params;

    useEffect(() => {
        if (search === "hero") return;

        const getRecipesHandler = async () => {
            try {
                setPageState("loading");

                const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);

                if (!data.ok) throw new Error();

                const fetchedRecipes = await data.json();

                setRecipes(
                    fetchedRecipes.recipes.map((recipe) => {
                        return {
                            imageUrl: recipe.image_url,
                            publisher: recipe.publisher,
                            publisherUrl: recipe.publisher_url,
                            recipeId: recipe.recipe_id,
                            sourceUrl: recipe.source_url,
                            title: recipe.title,
                        };
                    })
                );

                setPageState("recipes");
            } catch (err) {
                setPageState("error");
            }
        };

        getRecipesHandler();
        setPage(0);
    }, [search]);

    return (
        <>
            <div className="recipeList">
                {pageState === "loading" && <RecipesListSkeleton />}

                {pageState === "recipes" &&
                    slicedRecipes.map((recipe, i) => (
                        <Link to={`${recipe.recipeId}`} key={i}>
                            <div
                                className={
                                    recipe.recipeId === getRecipeID
                                        ? "recipeList-item recipeList-active centered"
                                        : "recipeList-item centered"
                                }
                            >
                                <div className="recipeList-item__image">
                                    <img src={recipe.imageUrl} alt={recipe.title} />
                                </div>

                                <div className="recipeList-item__info centered-column">
                                    <h3>{recipe.title}</h3>
                                    <span>from</span>
                                    <h4 className="centered">{recipe.publisher}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}

                {pageState === "error" && (
                    <Error
                        size="1.5"
                        errorMessage={`Couldn't find anything for the term ${search}. Please try again`}
                    />
                )}
            </div>
            <RecipeListNavigation
                allRecipes={recipes}
                getSlicedRecipes={setSlicedRecipes}
                page={page}
                pageHandler={setPage}
            />
        </>
    );
};

export default RecipesList;
