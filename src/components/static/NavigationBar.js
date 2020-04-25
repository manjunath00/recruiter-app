import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="nav-bar">
      <ul className="section">
        <li className="section__heading">Navigation</li>
        <li className="nav-bar__item">
          <NavLink to="/dashboard">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/candidates">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Candidates</span>
          </NavLink>
        </li>
      </ul>
      <ul className="section">
        <li className="section__heading">Jobs</li>

        <li className="nav-bar__item">
          <NavLink to="/jobs/live">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Live Jobs</span>
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/jobs/accepted">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Accepted Jobs</span>
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/jobs/rejected">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Rejected Jobs</span>
          </NavLink>
        </li>
      </ul>
      <ul className="section">
        <li className="section__heading">Support</li>

        <li className="nav-bar__item">
          <NavLink to="/dashboard">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Help Desk</span>
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/dashboard">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Tutorial</span>
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/dashboard">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span className="nav-bar-item__text">Feedback</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
