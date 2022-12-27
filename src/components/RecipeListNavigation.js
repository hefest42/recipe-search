import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ recipes, setDisplayedRecipes }) => {
    const params = useParams();
    const [page, setPage] = useState(0);
    const numberOfPages = Math.ceil(recipes.length / 7);

    const pageIncreaseHandler = () => {
        setPage((state) => state + 1);

        const start = page * 7;
        const end = (page + 1) * 7;

        const slicedRecipes = recipes.slice(start, end);
        console.log(slicedRecipes);
        setDisplayedRecipes(slicedRecipes);
    };

    useEffect(() => {
        const index = recipes.findIndex((recipe) => recipe.recipe_id === params["*"]);

        setPage(Math.floor(index / 7));
    }, [recipes, params["*"]]);

    return (
        <div className="navigation ">
            {(page === 0 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                    <AiOutlineArrowRight onClick={() => setPage((state) => state + 1)} />
                </>
            )) ||
                (page === numberOfPages - 1 && (
                    <>
                        <AiOutlineArrowLeft onClick={() => {}} />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 0 && (
                    <>
                        <AiOutlineArrowLeft onClick={() => {}} />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <AiOutlineArrowRight onClick={() => pageIncreaseHandler()} />
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
