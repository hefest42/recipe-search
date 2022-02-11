import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { BsSearch, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContainerTop = ({ getTerm }) => {
    const navigate = useNavigate();
    const [showSearchWarning, setShowSearchWarning] = useState(false);
    const foodRef = useRef();

    const searchHandler = e => {
        e.preventDefault();

        const search = foodRef.current.value;
        navigate(`${search}`);

        getTerm(search);
        foodRef.current.value = "";
        setShowSearchWarning(false);
    };

    return (
        <div className="top">
            <div className="top-logo">
                <p>RECIPE SEARCH</p>
            </div>
            <div className="top-search centered">
                <form className="centered" onSubmit={searchHandler}>
                    <div className="top-search__svg centered">
                        <BsSearch />
                    </div>
                    <input type="text" onFocus={() => setShowSearchWarning(true)} onBlur={() => setShowSearchWarning(false)} ref={foodRef} />
                    <button>SEARCH</button>

                    {showSearchWarning && (
                        <div className="top-search__warning centered-column">
                            <p>Search terms are limited. Search for terms like "Pizza" or "Chicken".</p>
                            <a href="https://forkify-api.herokuapp.com/phrases.html" target="_blank" rel="noreferrer" className="centered">
                                To see the full list of terms, click here. <FaExternalLinkAlt />
                            </a>
                        </div>
                    )}
                </form>
            </div>
            <div className="top-links">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default ContainerTop;
