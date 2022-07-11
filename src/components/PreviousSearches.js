import React from "react";

const PreviousSearches = ({ account, index, updateIndex, submitSearchTerm }) => {
    if (!account.username) return null;

    const searchTerms = account.previousSearchTerms.slice(1, 10);

    if (!searchTerms) return null;

    return (
        <div className="searches">
            <ul>
                {searchTerms.map((search, i) => (
                    <li
                        className={index === i ? "searches-active" : ""}
                        key={i}
                        onMouseEnter={() => updateIndex(i)}
                        onMouseLeave={() => updateIndex("")}
                        onClick={(e) => submitSearchTerm(e)}
                    >
                        {search}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousSearches;
