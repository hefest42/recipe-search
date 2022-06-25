import React from "react";

import { Link, useNavigate } from "react-router-dom";

const AccountDropdown = ({ accountUsername, changeAccountDropdown, logout }) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        changeAccountDropdown(false);
        navigate(0);
    };

    return (
        <div className="account" onMouseLeave={() => changeAccountDropdown(false)}>
            {!accountUsername && (
                <Link to={"/log-in"}>
                    <p className="account-link">Log In</p>
                </Link>
            )}

            {accountUsername && (
                <>
                    <p>Hello, {accountUsername}</p>
                    <p className="account-link" onClick={() => logoutHandler()}>
                        Logout
                    </p>
                </>
            )}
        </div>
    );
};

export default AccountDropdown;
