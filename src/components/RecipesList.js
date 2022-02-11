import React, { useState, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";
import RecipeListNavigation from "./RecipeListNavigation";

import { Link, useParams } from "react-router-dom";

const RecipesList = () => {
    const [pageState, setPageState] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipesHandler = async () => {
            try {
                setPageState("loading");

                const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);

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
            } catch (err) {}
        };

        // getRecipesHandler();
    }, []);

    return (
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
        </div>
    );
};

export default RecipesList;
