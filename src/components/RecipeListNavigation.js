import React from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ recipes, page, setPage }) => {
    const numberOfPages = Math.ceil(recipes.length / 7);

    const pageDecreaseHandler = () => {
        if (page === 1) return;

        setPage((state) => state - 1);
    };

    const pageIncreaseHandler = () => {
        if (page === numberOfPages) return;

        setPage((state) => state + 1);
    };

    return (
        <div className="navigation ">
            {(page === 1 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page}/${numberOfPages}`} </div>
                    <AiOutlineArrowRight onClick={pageIncreaseHandler} />
                </>
            )) ||
                (page === numberOfPages && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page}/${numberOfPages}`} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 1 && (
                    <>
                        <AiOutlineArrowLeft onClick={pageDecreaseHandler} />
                        <div>{`Pages: ${page}/${numberOfPages}`} </div>
                        <AiOutlineArrowRight onClick={pageIncreaseHandler} />
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
