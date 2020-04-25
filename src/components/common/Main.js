import React from "react";
import PropTypes from "prop-types";

import Job from "../job/Job";

/* Main component is like container for AcceptedJobs, RejectedJobs, LiveJobs */

function Main({ jobs }) {
  return (
    <div className="main flex">
      <div className="article-bar">
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </div>
    </div>
  );
}

Main.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default Main;
