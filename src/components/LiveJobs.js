import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Main from "../components/common/Main";

const LiveJobs = (props) => {
  const jobs = props.jobs.filter((job) => job.status === null);

  return <Main jobs={jobs} />;
};

LiveJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { jobs: state.jobs.allJobs };
};

export default connect(mapStateToProps, {})(LiveJobs);
