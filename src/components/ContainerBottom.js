import React from "react";

import { Routes, Route } from "react-router-dom";

import HeroRecipe from "./HeroRecipe";
import RecipesList from "./RecipesList";
import RecipeListNavigation from "./RecipeListNavigation";

const recipe = [
    {
        publisher: "101 Cookbooks",
        ingredients: [
            "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled",
            "1 3/4 (.44 ounce) teaspoons salt",
            "1 teaspoon (.11 ounce) instant yeast",
            "1/4 cup (2 ounces) olive oil (optional)",
            "1 3/4 cups (14 ounces) water, ice cold (40F)",
            "Semolina flour OR cornmeal for dusting",
        ],
        sourceUrl: "http://www.101cookbooks.com/archives/001199.html",
        recipeId: "47746",
        imageUrl: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
        socialRank: 100,
        publisherUrl: "http://www.101cookbooks.com",
        title: "Best Pizza Dough Ever",
    },

    {
        publisher: "101 Cookbooks",
        title: "Best Pizza Dough Ever",
        source_url: "http://www.101cookbooks.com/archives/001199.html",
        recipe_id: "47746",
        image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
        social_rank: 100,
        publisher_url: "http://www.101cookbooks.com",
    },
];

const ContainerBottom = ({ searchQuery }) => {
    return (
        <div className="down centered">
            <div className="down-left"></div>
            <div className="down-right"></div>
        </div>
    );
};

export default ContainerBottom;
