import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { BsSearch, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

import BookmarksDropdown from "./BookmarksDropdown";

const ContainerTop = ({ bookmarks, managingBookmarks }) => {
    const navigate = useNavigate();
    const [showSearchWarning, setShowSearchWarning] = useState(false);
    const [showBookmarks, setShowBookmarks] = useState(false);
    const foodRef = useRef();

    const searchHandler = (e) => {
        e.preventDefault();

        const search = foodRef.current.value;
        navigate(`${search}`);

        foodRef.current.value = "";
        setShowSearchWarning(false);
    };

    return (
        <>
            <div className="top">
                <div className="top-logo">
                    <Link to="/recipes">
                        <p>RECIPE SEARCH</p>
                    </Link>
                </div>
                <div className="top-search centered">
                    <form className="centered" onSubmit={searchHandler}>
                        <div className="top-search__svg centered">
                            <BsSearch />
                        </div>
                        <input type="text" ref={foodRef} onFocus={() => setShowSearchWarning(true)} />
                        <button>SEARCH</button>

                        {showSearchWarning && (
                            <div
                                className="top-search__warning centered-column"
                                onMouseEnter={() => setShowSearchWarning(true)}
                                onMouseLeave={() => setShowSearchWarning(false)}
                            >
                                <p>Search terms are limited. Search for terms like "Pizza" or "Chicken".</p>
                                <a
                                    href="https://forkify-api.herokuapp.com/phrases.html"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="centered"
                                    onClick={() => setShowSearchWarning(false)}
                                >
                                    To see the full list of terms, click here. <FaExternalLinkAlt />
                                </a>
                            </div>
                        )}
                    </form>
                </div>

                <div
                    className="top-links"
                    onMouseEnter={() => setShowBookmarks(true)}
                    onMouseLeave={() => setShowBookmarks(false)}
                >
                    <div className="top-links__container">
                        <div>
                            <AiOutlineDown />
                        </div>
                        <div>BOOKMARKS</div>
                        <span>{bookmarks.length > 0 ? <BsFillBookmarkFill /> : <BsBookmark />}</span>
                    </div>

                    {showBookmarks && <BookmarksDropdown bookmarks={bookmarks} managingBookmarks={managingBookmarks} />}
                </div>
            </div>
        </>
    );
};

export default ContainerTop;
