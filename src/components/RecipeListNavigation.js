import React, { useState, useEffect } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({}) => {
    // const numberOfPages = Math.ceil(allRecipes.length / 7);

    return (
        <div className="navigation ">
            {/* {(page === 0 && (
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
                        <AiOutlineArrowRight onClick={pageIncreaseHandler} />
                    </>
                ))} */}
        </div>
    );
};

export default RecipeListNavigation;
