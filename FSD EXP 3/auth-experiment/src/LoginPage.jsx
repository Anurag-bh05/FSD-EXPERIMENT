import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Strict validation based on professor's requirements
    if (username === "editor_user" && password === "edit123") {
      onLogin("editor");
      navigate("/dashboard");
    } else if (username === "admin_user" && password === "admin123") {
      onLogin("admin");
      navigate("/dashboard");
    } else if (username === "viewer_user" && password === "view123") {
      onLogin("viewer");
      navigate("/dashboard");
    } else {
      // If credentials don't match exactly, deny access
      setError("Invalid username or password. Please check the reference guide.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "85vh", fontFamily: "system-ui, sans-serif", backgroundColor: "#f9fafb", padding: "20px" }}>
      <div style={{ background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", width: "100%", maxWidth: "550px", border: "1px solid #e5e7eb" }}>
        
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2 style={{ color: "#aa3bff", fontSize: "28px", margin: "0 0 8px 0", fontWeight: "700" }}>System Login</h2>
          <p style={{ color: "#6b7280", margin: 0, fontSize: "15px" }}>Enter your credentials to access the system</p>
        </div>

        {/* Credentials Reference Guide */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px", padding: "16px", background: "#f3f4f6", borderRadius: "8px", border: "1px dashed #d1d5db" }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#374151", textTransform: "uppercase", letterSpacing: "1px" }}>Available Profiles</h3>
          <div style={{ fontSize: "13px", color: "#4b5563", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span><strong style={{ color: "#3b82f6" }}>Editor:</strong> editor_user</span>
              <span><strong>Pass:</strong> edit123</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span><strong style={{ color: "#aa3bff" }}>Admin:</strong> admin_user</span>
              <span><strong>Pass:</strong> admin123</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span><strong style={{ color: "#10b981" }}>Viewer:</strong> viewer_user</span>
              <span><strong>Pass:</strong> view123</span>
            </div>
          </div>
        </div>
        
        {/* Actual Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#374151" }}>Username</label>
            <input 
              type="text" 
              placeholder="Enter username..." 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", fontSize: "15px", borderRadius: "8px", border: "1px solid #d1d5db", boxSizing: "border-box", outlineColor: "#aa3bff" }}
              required
            />
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#374151" }}>Password</label>
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", fontSize: "15px", borderRadius: "8px", border: "1px solid #d1d5db", boxSizing: "border-box", outlineColor: "#aa3bff" }}
              required
            />
          </div>

          {/* Error Message Display */}
          {error && (
            <div style={{ color: "#ef4444", fontSize: "14px", fontWeight: "500", textAlign: "center", background: "#fef2f2", padding: "10px", borderRadius: "6px", border: "1px solid #fecaca" }}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            style={{ marginTop: "8px", padding: "14px", fontSize: "16px", fontWeight: "600", background: "#aa3bff", color: "#ffffff", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 6px rgba(170, 59, 255, 0.25)" }}
          >
            Authenticate
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;