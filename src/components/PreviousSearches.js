import React from "react";

const PreviousSearches = ({ historyTerms, index, updateIndex, submitSearchTerm }) => {
    const filteredOutHistoryTerms = historyTerms.filter((terms) => terms !== "");

    if (filteredOutHistoryTerms.length === 0) return null;

    return (
        <div className="searches">
            <ul>
                {filteredOutHistoryTerms
                    .slice(0, 10)
                    .filter((terms) => terms !== null)
                    .map((search, i) => (
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
