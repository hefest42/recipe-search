import React, { useEffect, Fragment } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ allRecipes, getSlicedRecipes, page, pageHandler }) => {
    const pageDecreaseHandler = () => {
        if (page === 0) return;
        else pageHandler(state => state - 1);
    };
    const pageIncreaseHandler = () => {
        if (page === Math.ceil(allRecipes.length / 8) - 1) return;
        else pageHandler(state => state + 1);
    };

    useEffect(() => {
        const start = (page + 0) * 8;
        const end = (page + 1) * 8;

        const slicedRecipes = allRecipes.slice(start, end);

        getSlicedRecipes(slicedRecipes);
        console.log(page === Math.ceil(allRecipes.length / 8));
    }, [page, allRecipes, getSlicedRecipes]);

    return (
        <div className="navigation ">
            {(page === 0 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page + 1}/${Math.ceil(allRecipes.length / 8)} `} </div>
                    <AiOutlineArrowRight onClick={pageIncreaseHandler} />
                </>
            )) ||
                (page === Math.ceil(allRecipes.length / 8) - 1 && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page + 1}/${Math.ceil(allRecipes.length / 8)} `} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 0 && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page + 1}/${Math.ceil(allRecipes.length / 8)} `} </div>
                        <AiOutlineArrowRight onClick={pageIncreaseHandler} />{" "}
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
