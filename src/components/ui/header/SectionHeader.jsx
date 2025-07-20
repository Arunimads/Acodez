import React from "react";
import "./SectionHeader.css";
const SectionHeader = ({ name, type }) => {
  if (type === "Main") return <p className="main-header">{name}</p>;
  if (type === "Sub") return <h2 className="sub-header">{name}</h2>;
  if (type === "Desc") return <p className="desc-header">{name}</p>;
};

export default SectionHeader;
