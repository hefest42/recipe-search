import React, { useState, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

import { useParams } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const HeroRecipe = ({ account, getID, accountBookmarks, updateAccountBookmarks }) => {
    const [pageState, setPageState] = useState("");
    const [sortedRecipe, setSortedRecipe] = useState({});
    const [showBookmarkModal, setShowBookmarkModal] = useState(false);
    const params = useParams();

    const { id } = params;

    const bookmarkModalHandler = () => {
        if (account.username) return;

        console.log("MODAL");
    };

    // fetching hero recipe based on the id in the link
    useEffect(() => {
        if (!id) return;

        const fetchRecipeHandler = async () => {
            try {
                setPageState("loading");

                const data = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);

                if (!data.ok) throw new Error();

                const { recipe } = await data.json();

                setSortedRecipe(() => {
                    return {
                        imageUrl: recipe.image_url,
                        ingredients: recipe.ingredients,
                        publisher: recipe.publisher,
                        publisherUrl: recipe.publisher_url,
                        recipeId: recipe.recipe_id,
                        sourceUrl: recipe.source_url,
                        title: recipe.title,
                    };
                });

                setPageState("hero");
            } catch (error) {
                setPageState("error");
            }
        };

        fetchRecipeHandler();
        getID(id);
    }, [id, getID]);

    // console.log(account);

    return (
        <div className="hero-container ">
            {pageState === "loading" && <LoadingSpinner />}

            {pageState === "hero" && (
                <div className="hero">
                    <div className="hero-image">
                        <img src={sortedRecipe.imageUrl} alt="" />
                    </div>

                    <div className="hero-title centered">
                        <h1>{`${sortedRecipe.title}`}</h1>
                    </div>

                    <div className="hero-bookmark centered">
                        {accountBookmarks.filter((bmark) => bmark.recipeId === id).length === 1 ? (
                            <BsFillBookmarkFill
                                onClick={() => {
                                    updateAccountBookmarks(id, sortedRecipe);
                                    bookmarkModalHandler();
                                }}
                            />
                        ) : (
                            <BsBookmark
                                onClick={() => {
                                    updateAccountBookmarks(id, sortedRecipe);
                                    bookmarkModalHandler();
                                }}
                            />
                        )}
                    </div>

                    <div className="hero-ingredients centered">
                        <ul>
                            {sortedRecipe.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="hero-info centered-column">
                        <h3>
                            For more recipes from <span className="hero-highlight">{sortedRecipe.publisher}</span> click the button.
                        </h3>

                        <a href={sortedRecipe.publisherUrl} target="_blank" rel="noreferrer">
                            <button className="centered">
                                {sortedRecipe.publisher} <FaExternalLinkAlt />
                            </button>
                        </a>
                        <h3>For more information about the recipe click the button.</h3>
                        <a href={sortedRecipe.sourceUrl} target="_blank" rel="noreferrer">
                            <button className="centered">
                                Recipe <FaExternalLinkAlt />
                            </button>
                        </a>
                    </div>
                </div>
            )}

            {pageState === "error" && <Error size="2" errorMessage="Oops... Something went wrong, please try again." />}
        </div>
    );
};

export default HeroRecipe;
