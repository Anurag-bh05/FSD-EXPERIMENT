import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, allowedRoles, userRole, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;