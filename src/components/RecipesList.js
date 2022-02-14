import React, { useState, useEffect, Fragment } from "react";

import LoadingSpinner from "./LoadingSpinner";
import RecipeListNavigation from "./RecipeListNavigation";
import Error from "./Error";

import { Link, useParams } from "react-router-dom";

// TODO set it to search based on the params
const RecipesList = () => {
    const [pageState, setPageState] = useState("");
    const [recipes, setRecipes] = useState([]);
    const params = useParams();

    const { search } = params;

    console.log(search);

    useEffect(() => {
        const getRecipesHandler = async () => {
            try {
                setPageState("loading");

                const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);

                const fetchedRecipes = await data.json();

                setRecipes(
                    fetchedRecipes.recipes.map(recipe => {
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
    }, [search]);

    return (
        <Fragment>
            <div className="recipeList">
                {pageState === "loading" && <LoadingSpinner />}

                {pageState === "recipes" &&
                    recipes.map((recipe, i) => (
                        <Link to={`${recipe.recipeId}`} key={i}>
                            <div className="recipeList-item centered">
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

                {pageState === "error" && <Error size="1.5" errorMessage={`Couldn't find anything for the term ${search}. Please try again`} />}
            </div>
            <RecipeListNavigation />
        </Fragment>
    );
};

export default RecipesList;