import React from "react";
import MaterialIcon from "material-icons-react";

const Icon = ({ icon, size, label }) => {
  return (
    <div
      className="icon-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60px",
        padding: "10px",
        color: "#fafafa"
      }}
    >
      {/* < {icon}/> */}

      <label htmlFor={label} style={{ fontSize: "12px" }}>
        {label}
      </label>
    </div>
  );
};

export default Icon;
