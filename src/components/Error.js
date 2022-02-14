import React from "react";

const Error = ({ errorMessage }) => {
    return (
        <div className="error">
            <p>{errorMessage}</p>
        </div>
    );
};

export default Error;
