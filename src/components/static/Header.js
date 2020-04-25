import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header flex">
      <div className="flex left-header">
        <div className="nav-item">
          <Link to="/">
            <i className="fas fa-bars"></i>
          </Link>
        </div>
        <div className="nav-item">
          <Link>Logo</Link>
        </div>
      </div>

      <div className="flex right-header">
        <div className="nav-item">
          <Link>
            <i className="fas fa-envelope"></i>
          </Link>
        </div>
        <div className="nav-item">
          <Link>
            <i className="fas fa-user-friends"></i>
          </Link>
        </div>

        <div className="nav-item">
          <Link>
            <i className="fas fa-user"></i>Username
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
