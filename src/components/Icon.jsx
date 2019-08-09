import React from "react";
import MaterialIcon from "material-icons-react";

const Icon = props => {
  return (
    <div
      className="icon-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60px",
        padding: "20px",
        color: "#fafafa"
      }}
    >
      <MaterialIcon icon={props.icon} size={props.size} />
      <label htmlFor={props.label} style={{ fontSize: "12px" }}>
        {props.label}
      </label>
    </div>
  );
};

export default Icon;
