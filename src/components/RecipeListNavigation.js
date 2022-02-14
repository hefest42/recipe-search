import React, { useState, useEffect, Fragment } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ allRecipes, getSlicedRecipes, page, pageHandler }) => {
    const windowSize = window.innerWidth;
    const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState();
    const numberOfPages = Math.ceil(allRecipes.length / numberOfItemsPerPage);

    const pageDecreaseHandler = () => {
        if (page === 0) return;
        else pageHandler(state => state - 1);
    };
    const pageIncreaseHandler = () => {
        if (page === numberOfPages - 1) return;
        else pageHandler(state => state + 1);
    };

    useEffect(() => {
        const start = (page + 0) * numberOfItemsPerPage;
        const end = (page + 1) * numberOfItemsPerPage;

        const slicedRecipes = allRecipes.slice(start, end);

        getSlicedRecipes(slicedRecipes);

        if (windowSize > 1000) setNumberOfItemsPerPage(8);
        else setNumberOfItemsPerPage(10);

        window.addEventListener("resize", () => {
            if (windowSize > 1000) setNumberOfItemsPerPage(8);
            else setNumberOfItemsPerPage(10);
        });
    }, [page, allRecipes, getSlicedRecipes, numberOfItemsPerPage, windowSize]);

    if (allRecipes.length === 0) return null;

    return (
        <div className="navigation ">
            {(page === 0 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                    <AiOutlineArrowRight onClick={pageIncreaseHandler} />
                </>
            )) ||
                (page === numberOfPages - 1 && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 0 && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <AiOutlineArrowRight onClick={pageIncreaseHandler} />{" "}
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
