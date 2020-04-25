import React from "react";

function Header() {
  return (
    <div className="header flex">
      <div className="flex left-header">
        <div className="nav-item">
          <a href="#">
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div className="nav-item">
          <a href="#">Logo</a>
        </div>
      </div>

      <div className="flex right-header">
        <div className="nav-item">
          <a href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="nav-item">
          <a href="#">
            <i className="fas fa-user-friends"></i>
          </a>
        </div>

        <div className="nav-item">
          <a href="#">
            <i className="fas fa-user"></i>Username
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
