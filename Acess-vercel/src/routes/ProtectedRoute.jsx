import { Navigate } from "react-router-dom";
import React from "react";

import ROUTES from "../constants/Routes";


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={ROUTES.LOGIN} replace />;
};

export default ProtectedRoute; 
