import React from "react";
import PropTypes from "prop-types";

const Candidate = (props) => {
  const { person } = props;
  return (
    <div className="article">
      <div className="single-article">
        <div className="article-picture">
          <i className="fas fa-image"></i>
        </div>
        <div className="article-heading">{person.person}</div>
        <div className="article-sub-heading">
          {person.companyName}, {person.department}
        </div>
        <div className="article-location">{person.location}</div>
        <div className="article-numbers grid-two">
          <div className="article-id  aricle-item">
            <i className="fas fa-id-card"></i>
            <span>{person.phone}</span>
          </div>
          <div className="article-exp  aricle-item">
            <i className="fas fa-suitcase"></i>
            <span>{person.requiredExp} yrs</span>
          </div>
          <div className="article-type aricle-item">
            <i className="far fa-calendar-alt"></i>
            <span>{person.type}</span>
          </div>
        </div>
        <div className="article-summary grid-two">
          <div className="article-salary aricle-item">
            <i className="fas fa-money-check-alt"></i>
            <span>{person.salary} Lakhs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Candidate.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Candidate;
