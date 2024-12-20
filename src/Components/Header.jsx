import React from "react";
import { FaSyncAlt } from "react-icons/fa";

const Header = () => {
  // Sample last updated timestamp
  const lastUpdated = "October 25, 2023 at 2:31 PM";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#111827", // Updated background color
        padding: "1rem 2rem",
        color: "#fff",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        borderBottom: "1px solid #2A2A2A",
      }}
    >
      {/* Title */}
      <div style={{ fontWeight: "bold" }}>Optimization Dashboard</div>

      {/* Last Updated and Refresh */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "14px", color: "#9E9E9E" }}>
          Last updated on {lastUpdated}
        </span>
        <FaSyncAlt
          style={{
            cursor: "pointer",
            color: "#9E9E9E",
          }}
          title="Refresh"
        />
      </div>
    </div>
  );
};

export default Header;
