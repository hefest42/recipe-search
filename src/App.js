import Container from "./components/Container";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/recipes" />} />
            <Route
                path="/recipes"
                element={
                    <div className="app">
                        <Container />
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
