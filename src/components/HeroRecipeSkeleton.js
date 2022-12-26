import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroRecipeSkeleton = ({ ingredients }) => {
    return (
        <div className="hero-skeleton">
            <div className="hero-skeleton__image">
                <Skeleton height={"100%"} />
            </div>
            <div className="hero-skeleton__title">
                <div className="hero-skeleton__title-name">
                    <Skeleton height={"100%"} />
                </div>
                <div className="hero-skeleton__title-svg">
                    <Skeleton height={"100%"} />
                </div>
            </div>

            <div className="hero-ingredients centered">
                <ul>
                    {Array(18)
                        .fill("0")
                        .map((ing, i) => (
                            <li key={i}>
                                <Skeleton />
                            </li>
                        ))}
                </ul>
            </div>

            <div className="hero-skeleton__info centered-column">
                <h3>
                    <Skeleton height={"100%"} />
                </h3>

                <h3>
                    <Skeleton height={"100%"} />
                </h3>
            </div>
        </div>
    );
};

export default HeroRecipeSkeleton;
