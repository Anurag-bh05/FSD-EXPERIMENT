import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = username === "user1" || username.includes("admin") ? "admin" : "viewer";
    onLogin(role);
    navigate("/dashboard");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "85vh", fontFamily: "system-ui, sans-serif", backgroundColor: "#f9fafb" }}>
      <div style={{ background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", width: "100%", maxWidth: "380px", border: "1px solid #e5e7eb" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ color: "#aa3bff", fontSize: "28px", margin: "0 0 8px 0", fontWeight: "700" }}>System Login</h2>
          <p style={{ color: "#6b7280", margin: 0, fontSize: "15px" }}>Authenticate to access secure routes</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#374151" }}>Username</label>
            <input 
              type="text" 
              placeholder="e.g., user1" 
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
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", fontSize: "15px", borderRadius: "8px", border: "1px solid #d1d5db", boxSizing: "border-box", outlineColor: "#aa3bff" }}
              required
            />
          </div>

          <button 
            type="submit" 
            style={{ marginTop: "12px", padding: "14px", fontSize: "16px", fontWeight: "600", background: "#aa3bff", color: "#ffffff", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 6px rgba(170, 59, 255, 0.25)" }}
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;