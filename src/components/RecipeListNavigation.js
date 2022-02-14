import React from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const RecipeListNavigation = () => {
    return (
        <div className="navigation ">
            <AiOutlineArrowLeft /> <div>Pages: </div>
            <AiOutlineArrowRight />
        </div>
    );
};

export default RecipeListNavigation;
