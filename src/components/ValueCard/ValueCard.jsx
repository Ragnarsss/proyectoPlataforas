import React from "react";
import "./value_card.css";

function ValueCard({ caption, ammount, icon = "" }) {
  let dinamicIcon = "";
  if (icon !== "") {
    dinamicIcon = React.createElement(icon);
  }

  return (
    <div className="card">
      <div className="caption-icon">
        {dinamicIcon}
        <p>{caption}</p>
      </div>
      <p className="value">{ammount}</p>
    </div>
  );
}
export default ValueCard;
