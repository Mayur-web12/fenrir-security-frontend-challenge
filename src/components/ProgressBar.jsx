
import React from "react";

function ProgressBar({ progress, status }) {

  const getColor = () => {
    if (status === "Failed") return "#ef4444"; 
    if (status === "Scheduled") return "#9ca3af";
    return "#0CC8A8";                              
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: getColor()
          }}
        ></div>
      </div>
      <span className="progress-text">{progress}%</span>
    </div>
  );
}

export default ProgressBar;