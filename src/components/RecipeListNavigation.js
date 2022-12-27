import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ recipes }) => {
    const params = useParams();
    const [page, setPage] = useState(1);
    const numberOfPages = Math.ceil(recipes.length / 7);

    useEffect(() => {
        if (params["*"] === "" || recipes.length === 0) return;

        const recipeIndex = recipes.findIndex((recipe) => recipe.recipe_id == params["*"]);

        const pageNumber = recipeIndex === 0 ? 1 : Math.ceil(recipeIndex / 7);

        setPage(pageNumber);
    }, [params["*"], recipes]);

    return (
        <div className="navigation ">
            {(page === 0 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page}/${numberOfPages}`} </div>
                    <AiOutlineArrowRight />
                </>
            )) ||
                (page === numberOfPages - 1 && (
                    <>
                        <AiOutlineArrowLeft />
                        <div>{`Pages: ${page}/${numberOfPages}`} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 0 && (
                    <>
                        <AiOutlineArrowLeft />
                        <div>{`Pages: ${page}/${numberOfPages}`} </div>
                        <AiOutlineArrowRight />
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
