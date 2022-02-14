import React from "react";

const Error = ({ errorMessage, size }) => {
    return (
        <div className="error centered">
            <p
                style={{
                    fontSize: `${size}rem`,
                }}
            >
                {errorMessage}
            </p>
        </div>
    );
};

export default Error;
