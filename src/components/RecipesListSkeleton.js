import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RecipesListSkeleton = () => {
    return Array(7)
        .fill("0")
        .map((item, i) => (
            <div key={i} className="loading-skeleton">
                <div className="loading-skeleton__image">
                    <Skeleton height={"100%"} />
                </div>
                <div className="loading-skeleton__info">
                    <Skeleton count={3} />
                </div>
            </div>
        ));
};

export default RecipesListSkeleton;
