import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { BsSearch, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

import AccountDropdown from "./AccountDropdown";
import BookmarksDropdown from "./BookmarksDropdown";
import PreviousSearches from "./PreviousSearches";

const previousSearches = ["pizza", "steak", "chicken"];

const ContainerTop = ({ loggedInAccount, accountBookmarks, onUpdateAccountBookmarks, logoutAccount }) => {
    const navigate = useNavigate();
    const [showSearchWarning, setShowSearchWarning] = useState(false); // for displaying search information
    const [showBookmarks, setShowBookmarks] = useState(false); // for displaying bookmarks dropdown
    const [showAccount, setShowAccount] = useState(false); // for displaying Account dropdown menu
    const [showPreviousSearches, setShowPreviousSearches] = useState(false);
    const [activeSearchIndex, setActiveSearchIndex] = useState("");
    const foodRef = useRef();

    const searchHandler = (e) => {
        e.preventDefault();

        const search = foodRef.current.value;
        navigate(`${search}`);

        foodRef.current.value = "";
        setShowSearchWarning(false);
    };

    const keyPressHandler = (e) => {
        switch (e.key) {
            case "ArrowDown":
                if (activeSearchIndex === "" || activeSearchIndex === previousSearches.length - 1) setActiveSearchIndex(0);
                else setActiveSearchIndex((state) => state + 1);
                break;

            case "ArrowUp":
                if (activeSearchIndex === "" || activeSearchIndex === 0) setActiveSearchIndex(previousSearches.length - 1);
                else setActiveSearchIndex((state) => state - 1);
                break;

            default:
                break;
        }
    };

    return (
        <>
            <div className="top" onKeyDown={keyPressHandler} tabIndex={0}>
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
                        <input
                            type="text"
                            ref={foodRef}
                            onFocus={() => setShowPreviousSearches(true)}
                            onBlur={() => setShowPreviousSearches(false)}
                        />
                        <button>SEARCH</button>

                        {showPreviousSearches && (
                            <PreviousSearches searches={previousSearches} index={activeSearchIndex} updateIndex={setActiveSearchIndex} />
                        )}

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
                <div className="top-links">
                    <div className="top-links_container" onMouseEnter={() => setShowBookmarks(true)} onMouseLeave={() => setShowBookmarks(false)}>
                        BOOKMARKS {accountBookmarks.slice(1).length === 0 ? <BsBookmark /> : <BsFillBookmarkFill />}
                        {showBookmarks && (
                            <BookmarksDropdown account={loggedInAccount} bookmarks={accountBookmarks} updatedBookmarks={onUpdateAccountBookmarks} />
                        )}
                    </div>

                    <div className="top-links_container" onMouseEnter={() => setShowAccount(true)} onMouseLeave={() => setShowAccount(false)}>
                        <VscAccount />
                        {showAccount && <AccountDropdown accountUsername={loggedInAccount.username} logout={logoutAccount} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerTop;
