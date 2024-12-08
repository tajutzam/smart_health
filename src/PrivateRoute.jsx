import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

const PrivateRoute = ({ element, ...rest }) => {
  const { user, checkLogin } = useAuth();

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;
