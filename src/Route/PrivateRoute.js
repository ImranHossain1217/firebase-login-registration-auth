import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <button className="btn btn-square loading mt-56"></button>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
