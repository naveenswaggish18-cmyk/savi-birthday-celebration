import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const expiresAt =
        localStorage.getItem("authExpiresAt");

    if (!expiresAt) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    if (Date.now() >= Number(expiresAt)) {

        localStorage.removeItem("authExpiresAt");

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }

    return children;
}

export default ProtectedRoute;