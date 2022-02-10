import React, { useState } from "react";
import ContainerTop from "./ContainerTop";
import ContainerBottom from "./ContainerBottom";

import { Routes, Route } from "react-router-dom";

const Container = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container">
            <ContainerTop getTerm={setSearchTerm} />
            <ContainerBottom searchQuery={searchTerm} />
        </div>
    );
};

export default Container;
