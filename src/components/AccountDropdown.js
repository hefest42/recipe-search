import React from "react";

import { Link } from "react-router-dom";

const AccountDropdown = ({ accountUsername, changeAccountDropdown }) => {
    return (
        <div className="account" onMouseLeave={() => changeAccountDropdown(false)}>
            {!accountUsername && (
                <Link to={"/log-in"}>
                    <p>Log In</p>
                </Link>
            )}

            {accountUsername && (
                <>
                    <p>Hello, {accountUsername}</p>
                    <p>Logout</p>
                </>
            )}
        </div>
    );
};

export default AccountDropdown;
