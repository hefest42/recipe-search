import React from "react";

import { useNavigate } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const BookmarksDropdown = ({ bookmarks }) => {
    const navigate = useNavigate();

    const deleteBookmark = (id) => {};

    return (
        <div className="bookmarks">
            {bookmarks.map((bm, i) => (
                <div className="bookmarks-item" key={i}>
                    <div className="bookmarks-item__image">
                        <img src={bm.imageUrl} alt="recipe" />
                    </div>

                    <div className="bookmarks-item__title centered">{bm.title}</div>

                    <a href={bm.sourceUrl} target="blank">
                        <div className="bookmarks-item__link centered">
                            <FaExternalLinkAlt />
                        </div>
                    </a>

                    <div className="bookmarks-item__delete centered">
                        <RiDeleteBinLine onClick={() => deleteBookmark(bm.recipeId)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookmarksDropdown;
