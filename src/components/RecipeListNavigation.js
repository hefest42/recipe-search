import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = ({ recipes }) => {
    const params = useParams();
    const [page, setPage] = useState(0);
    const numberOfPages = Math.ceil(recipes.length / 7);

    useEffect(() => {});

    return (
        <div className="navigation ">
            {(page === 0 && (
                <>
                    <div className="navigation-empty"></div>
                    <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                    <AiOutlineArrowRight />
                </>
            )) ||
                (page === numberOfPages - 1 && (
                    <>
                        <AiOutlineArrowLeft />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <div className="navigation-empty"></div>
                    </>
                )) ||
                (page > 0 && (
                    <>
                        <AiOutlineArrowLeft />
                        <div>{`Pages: ${page + 1}/${numberOfPages}`} </div>
                        <AiOutlineArrowRight o />
                    </>
                ))}
        </div>
    );
};

export default RecipeListNavigation;
