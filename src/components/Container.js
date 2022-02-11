import React from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

// https://forkify-api.herokuapp.com/api/search?q=pizza
const Container = () => {
    return (
        <div className="container">
            <ContainerTop />
            <Routes>
                <Route path={`:search/*`} element={<ContainerBottom />} />
            </Routes>
        </div>
    );
};

export default Container;
