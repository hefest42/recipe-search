import React from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({ account }) => {
    return (
        <div className="container">
            <ContainerTop loggedInAccounts={account} />
            <Routes>
                <Route path={`:search/*`} element={<ContainerBottom />} />
            </Routes>
        </div>
    );
};

export default Container;
