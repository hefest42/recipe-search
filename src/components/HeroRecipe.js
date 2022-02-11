import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const HeroRecipe = () => {
    const params = useParams();
    const [sortedRecipe, setSortedRecipe] = useState({});

    const { id } = params;

    useEffect(() => {
        if (!id) return;

        const fetchRecipeHandler = async () => {
            try {
                const data = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);

                const { recipe } = await data.json();

                setSortedRecipe(() => {
                    return {
                        imageUrl: recipe.image_url,
                        ingredients: recipe.ingredients,
                        publisher: recipe.publisher,
                        publisherUrl: recipe.publisher_url,
                        recipeId: recipe.recipe_id,
                        sourceUrl: recipe.source_url,
                        title: recipe.title,
                    };
                });
            } catch (error) {}
        };

        fetchRecipeHandler();
    }, [id]);

    return (
        <div>
            <h1 style={{ color: "white" }}>{sortedRecipe.title}</h1>
        </div>
    );
};

export default HeroRecipe;
