import { useState } from 'react';

const Dashboard = () => {
  const [postTitle, setPostTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const availablePlatforms = ['LinkedIn', 'Instagram', 'Twitter/X', 'Facebook'];

  const handleTogglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (postTitle.trim() && selectedPlatforms.length > 0) {
      setPosts([...posts, { id: Date.now(), title: postTitle, platforms: selectedPlatforms }]);
      setPostTitle('');
      setSelectedPlatforms([]);
    } else if (postTitle.trim()) {
      alert("Please select at least one platform before posting.");
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", fontFamily: "system-ui, sans-serif", backgroundColor: "#f9fafb", minHeight: "85vh" }}>
      <div style={{ background: "#ffffff", padding: "32px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)", border: "1px solid #e5e7eb", width: "100%", maxWidth: "600px" }}>
        
        <h2 style={{ color: "#aa3bff", marginTop: 0, marginBottom: "24px", textAlign: "center" }}>Multi-Platform Composer</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {availablePlatforms.map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => handleTogglePlatform(platform)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: selectedPlatforms.includes(platform) ? "2px solid #aa3bff" : "1px solid #d1d5db",
                background: selectedPlatforms.includes(platform) ? "rgba(170, 59, 255, 0.1)" : "#ffffff",
                color: selectedPlatforms.includes(platform) ? "#aa3bff" : "#6b7280",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              {platform}
            </button>
          ))}
        </div>

        <form onSubmit={handleAddPost} style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="What do you want to share?"
            style={{ flex: 1, padding: "12px 16px", fontSize: "15px", borderRadius: "8px", border: "1px solid #d1d5db", outlineColor: "#aa3bff" }}
          />
          <button type="submit" style={{ padding: "12px 20px", fontSize: "15px", fontWeight: "600", background: "#aa3bff", color: "#ffffff", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 6px rgba(170, 59, 255, 0.25)" }}>
            Publish
          </button>
        </form>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {posts.map((post) => (
            <li key={post.id} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px", background: "#f3f4f6", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ color: "#374151", fontWeight: "500", fontSize: "16px" }}>{post.title}</span>
                <button onClick={() => handleDeletePost(post.id)} style={{ padding: "6px 12px", fontSize: "13px", fontWeight: "bold", background: "#ef4444", color: "#ffffff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
                  Delete
                </button>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {post.platforms.map((p) => (
                  <span key={p} style={{ background: "#e5e7eb", color: "#4b5563", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>
                    {p}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Dashboard;