import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const handleLogin = (role) => {
    const dummyToken = `HEADER.{"role":"${role}"}.SIGNATURE`;
    localStorage.setItem("token", dummyToken);
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole("");
  };

  return (
    <Router>
      <nav style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "20px", background: "#ffffff", borderBottom: "1px solid #e5e7eb", fontFamily: "system-ui, sans-serif" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#374151", fontWeight: "600", fontSize: "16px" }}>Home</Link>
        {isAuthenticated && (
          <>
            <Link to="/dashboard" style={{ textDecoration: "none", color: "#374151", fontWeight: "600", fontSize: "16px" }}>Dashboard</Link>
            <Link to="/admin" style={{ textDecoration: "none", color: "#374151", fontWeight: "600", fontSize: "16px" }}>Admin Panel</Link>
          </>
        )}
        {!isAuthenticated ? (
          <Link to="/login" style={{ textDecoration: "none", color: "#aa3bff", fontWeight: "700", fontSize: "16px" }}>Login</Link>
        ) : (
          <span onClick={handleLogout} style={{ color: "#ef4444", cursor: "pointer", fontWeight: "700", fontSize: "16px" }}>Logout</span>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        
        <Route path="/unauthorized" element={
          <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "system-ui, sans-serif" }}>
            <h2 style={{ color: "#ef4444" }}>Access Denied</h2>
            <p>You do not have the required role to view this page.</p>
          </div>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["viewer", "admin"]} userRole={userRole}>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={["admin"]} userRole={userRole}>
            <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "system-ui, sans-serif" }}>
              <h2 style={{ color: "#aa3bff" }}>Admin Panel</h2>
              <button style={{ marginTop: "20px", padding: "12px 24px", background: "#ef4444", color: "#ffffff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
                Delete System Data
              </button>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;