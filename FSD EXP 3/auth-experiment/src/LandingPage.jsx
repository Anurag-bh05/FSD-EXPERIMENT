import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 20px", fontFamily: "system-ui, sans-serif", backgroundColor: "#f9fafb", minHeight: "85vh" }}>
      
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{ fontSize: "3.5rem", color: "#111827", margin: "0 0 16px 0", fontWeight: "800", letterSpacing: "-0.05em" }}>
          <span style={{ color: "#aa3bff" }}>Experiment 3</span>
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#4b5563", margin: 0, maxWidth: "600px", lineHeight: "1.5" }}>
          Advanced Role-Based Authentication & Route Protection System
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%", maxWidth: "640px" }}>
        
        <div style={{ background: "#ffffff", padding: "32px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", border: "1px solid #e5e7eb", textAlign: "center" }}>
          <h2 style={{ color: "#111827", fontSize: "1.5rem", marginTop: 0, marginBottom: "24px" }}>Core Security Features</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <span style={{ background: "rgba(170, 59, 255, 0.1)", color: "#aa3bff", padding: "8px 16px", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: "600", border: "1px solid rgba(170, 59, 255, 0.3)" }}>JWT Tokens</span>
            <span style={{ background: "rgba(170, 59, 255, 0.1)", color: "#aa3bff", padding: "8px 16px", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: "600", border: "1px solid rgba(170, 59, 255, 0.3)" }}>Axios Interceptors</span>
            <span style={{ background: "rgba(170, 59, 255, 0.1)", color: "#aa3bff", padding: "8px 16px", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: "600", border: "1px solid rgba(170, 59, 255, 0.3)" }}>Route Guards</span>
          </div>
        </div>

        <div style={{ background: "#ffffff", padding: "32px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", border: "1px solid #e5e7eb", textAlign: "center" }}>
          <h2 style={{ color: "#111827", fontSize: "1.5rem", marginTop: 0, marginBottom: "24px" }}>System Access</h2>
          <Link to="/login" style={{ display: "inline-block", background: "#aa3bff", color: "#ffffff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "1.125rem", boxShadow: "0 4px 6px rgba(170, 59, 255, 0.25)" }}>
            Enter Secure Login Portal
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;