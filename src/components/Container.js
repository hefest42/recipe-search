import React from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({ account }) => {
    return (
        <div className="container">
            <ContainerTop loggedInAccount={account} />
            <Routes>
                <Route path={`:search/*`} element={<ContainerBottom loggedInAccount={account} />} />
            </Routes>
        </div>
    );
};

export default Container;
