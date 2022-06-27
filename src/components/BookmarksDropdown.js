import React from "react";

import { useNavigate } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const BookmarksDropdown = ({ account, changeBookmarksDropdown, bookmarks, updatedBookmarks }) => {
    const navigate = useNavigate();

    const modifiedBookmarks = bookmarks.slice(1);

    const heroRecipeHandler = (id) => {
        navigate(`hero/${id}`);
    };

    return (
        <div className="bookmarks" onMouseLeave={() => changeBookmarksDropdown(false)}>
            {!account.username && <p className="bookmarks-empty">To save bookmarks, you first need to create an account</p>}
            {account.username && modifiedBookmarks.length === 0 && (
                <p className="bookmarks-empty">You have no bookmarks. Find a recipe you like, and bookmark it!</p>
            )}

            {modifiedBookmarks.map((bm, i) => (
                <div className="bookmarks-item" key={i}>
                    <div className="bookmarks-item__image" onClick={() => heroRecipeHandler(bm.recipeId)}>
                        <img src={bm.imageUrl} alt="recipe" />
                    </div>

                    <div className="bookmarks-item__title centered" onClick={() => heroRecipeHandler(bm.recipeId)}>
                        {bm.title}
                    </div>

                    <a href={bm.sourceUrl} target="blank">
                        <div className="bookmarks-item__link centered">
                            <FaExternalLinkAlt />
                        </div>
                    </a>

                    <div className="bookmarks-item__delete centered" onClick={() => updatedBookmarks(bm.recipeId, bm)}>
                        <RiDeleteBinLine />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookmarksDropdown;
