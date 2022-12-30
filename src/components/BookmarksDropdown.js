import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const BookmarksDropdown = ({ bookmarks, managingBookmarks }) => {
    const navigate = useNavigate();
    const params = useParams();

    const navigateHandler = (id) => {
        const searchParams = params["*"] === "" ? `hero/${id}` : `${params["*"].split("/")[0]}/${id}`;

        return searchParams;
    };

    return (
        <div className="bookmarks">
            {bookmarks.map((bm, i) => (
                <div className="bookmarks-item" key={i}>
                    <div className="bookmarks-item__image">
                        <img src={bm.imageUrl} alt="recipe" />
                    </div>

                    <div
                        className="bookmarks-item__title centered"
                        onClick={() => navigate(`${navigateHandler(bm.recipeId)}`)}
                    >
                        {bm.title}
                    </div>

                    <a href={bm.sourceUrl} target="blank">
                        <div className="bookmarks-item__link centered">
                            <FaExternalLinkAlt />
                        </div>
                    </a>

                    <div className="bookmarks-item__delete centered">
                        <RiDeleteBinLine onClick={() => managingBookmarks(bm)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookmarksDropdown;
