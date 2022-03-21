import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function PrivateRoute({ children }) {
    const { user } = useAuth();
    return user?.email ? children : <Navigate to="/login" />;
}