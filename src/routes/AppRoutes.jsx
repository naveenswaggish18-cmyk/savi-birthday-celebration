import { BrowserRouter, Routes, Route } from "react-router-dom";

import VerifyOTP from "../pages/Auth/OTPVerification/OTPVerification";

import Welcome from "../pages/Welcome/Welcome";
import Memories from "../pages/Memories/Memories";
import Journey from "../pages/Journey/Journey";
import FinalSurprise from "../pages/FinalSurprise/FinalSurprise";
import EmailLogin from "../pages/Auth/EmailLogin/EmailLogin";

import ProtectedRoute from "../components/Auth/ProtectedRoute/ProtectedRoute";


function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Authentication */}

                <Route
                    path="/"
                    element={<EmailLogin />}
                />

                <Route
                    path="/login"
                    element={<EmailLogin />}
                />

                <Route
                    path="/verify-otp"
                    element={<VerifyOTP />}
                />


                {/* Protected Birthday Website */}

                <Route
                    path="/welcome"
                    element={
                        <ProtectedRoute>
                            <Welcome />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/memories"
                    element={
                        <ProtectedRoute>
                            <Memories />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/journey"
                    element={
                        <ProtectedRoute>
                            <Journey />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/final-surprise"
                    element={
                        <ProtectedRoute>
                            <FinalSurprise />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;