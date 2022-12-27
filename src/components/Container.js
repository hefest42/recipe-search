import React, { useState, useEffect } from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = ({}) => {
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
