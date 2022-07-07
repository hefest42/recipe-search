import React from "react";

const PreviousSearches = ({ searches, index, updateIndex }) => {
    return (
        <div className="searches">
            <ul>
                {searches.map((search, i) => (
                    <li
                        className={index === i ? "searches-active" : ""}
                        key={i}
                        onMouseEnter={() => updateIndex(i)}
                        onMouseLeave={() => updateIndex("")}
                    >
                        {search}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousSearches;
