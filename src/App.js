import { useState } from "react";

import Container from "./components/Container";

import { Routes, Route, Navigate } from "react-router-dom";

import CreateAccount from "./components/Create-Account/CreateAccount";
import LogIn from "./components/Log-in/LogIn";

function App() {
    const [loggedInAccount, setLoggedInAccount] = useState({
        bookmarks: [],
    });

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/recipes" />} />
            <Route
                path="/recipes/*"
                element={
                    <div className="app">
                        <Container account={loggedInAccount} />
                    </div>
                }
            />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="log-in" element={<LogIn logInAccount={setLoggedInAccount} />} />
        </Routes>
    );
}

export default App;
