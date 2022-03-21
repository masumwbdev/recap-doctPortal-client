import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function PrivateOutlate(){
    const {user} = useAuth();
    return user.email ? <Outlet /> : <Navigate to="/login" />;
};