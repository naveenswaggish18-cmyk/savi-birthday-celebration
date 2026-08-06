import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome";
import Memories from "../pages/Memories/Memories";
import Journey from "../pages/Journey/Journey";
import FinalSurprise from "../pages/FinalSurprise/FinalSurprise";
function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Welcome />}
                />

                <Route
                    path="/memories"
                    element={<Memories />}
                />

                <Route
                    path="/journey"
                    element={<Journey />}
                />

                <Route 
                    path="/final-surprise"
                    element={<FinalSurprise />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRoutes;