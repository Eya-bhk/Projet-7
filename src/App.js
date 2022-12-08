import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogementDetails from "./pages/LogementDetails";
import Erreur from "./pages/Erreur";
import About from "./pages/About";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/logement/:id"
                    element={<LogementDetails />}
                ></Route>
                <Route path="*" element={<Erreur />}></Route>
                <Route path="/A-propos" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
