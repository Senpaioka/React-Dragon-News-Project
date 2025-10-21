import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Spinner from "../components/Spinner";

function PrivateRoute({children}) {

    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) return <Spinner></Spinner>;
    if (user) return children;

    return <Navigate state={location?.pathname} to='/login'></Navigate>
}

export default PrivateRoute;