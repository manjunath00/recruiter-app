import React from "react";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <button className="btn-icon">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="side-bar-item">
        <button className="btn-icon">
          <i className="fas fa-filter"></i>
        </button>
      </div>
      <div className="side-bar-item">
        <button className="btn-icon">
          <i className="fas fa-sort"></i>
        </button>
      </div>
      <div className="side-bar-item">
        <button className="btn-icon">
          <i className="fas fa-backward"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
