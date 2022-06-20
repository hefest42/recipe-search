import React from "react";

const AccountDropdown = ({ changeAccount }) => {
    return (
        <div className="account" onMouseLeave={() => changeAccount(false)}>
            <p>Hello, Account</p>
            <p>Logout</p>
        </div>
    );
};

export default AccountDropdown;
