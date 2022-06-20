import Container from "./components/Container";

import { Routes, Route, Navigate } from "react-router-dom";

import CreateAccount from "./components/Create-Account/CreateAccount";
import LogIn from "./components/Log-in/LogIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/recipes" />} />
            <Route
                path="/recipes/*"
                element={
                    <div className="app">
                        <Container />
                    </div>
                }
            />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="log-in" element={<LogIn />} />
        </Routes>
    );
}

export default App;
