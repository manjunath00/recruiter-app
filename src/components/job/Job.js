import React from "react";
import PropTypes from "prop-types";

import JobAction from "./JobAction";

function Job(props) {
  const { job } = props;

  return (
    <div className="article">
      <div className="single-article">
        <div className="article-picture">
          <i className="fas fa-image"></i>
        </div>
        <div className="article-heading">{job.jobTitle}</div>
        <div className="article-sub-heading">
          {job.companyName}, {job.department}
        </div>
        <div className="article-location">{job.location}</div>
        <div className="article-numbers grid-two">
          <div className="article-id  aricle-item">
            <i className="fas fa-id-card"></i>
            <span>{job.phone}</span>
          </div>
          <div className="article-exp  aricle-item">
            <i className="fas fa-suitcase"></i>
            <span>{job.requiredExp} yrs</span>
          </div>
          <div className="article-type aricle-item">
            <i className="far fa-calendar-alt"></i>
            <span>{job.type}</span>
          </div>
        </div>
        <div className="article-summary grid-two">
          <div className="article-candidates aricle-item">
            <i className="fas fa-users"></i>
            <span>{job.candidates} candidates</span>
          </div>
          <div className="article-salary aricle-item">
            <i className="fas fa-money-check-alt"></i>
            <span>{job.salary} Lakhs</span>
          </div>
        </div>

        <div className="article-action flex">
          <JobAction id={job.id} status={job.status} />
        </div>
      </div>
    </div>
  );
}
Job.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Job;
