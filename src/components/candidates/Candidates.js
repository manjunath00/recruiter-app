import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Candidate from "./Candidate";

const Candidates = (props) => {
  const candidates = props.candidates;

  return (
    <div className="main flex">
      <div className="article-bar">
        {candidates.map((candidate) => (
          <Candidate person={candidate} />
        ))}
      </div>
    </div>
  );
};

Candidates.propTypes = {
  candidates: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { candidates: state.jobs.allCandidates };
};

export default connect(mapStateToProps, {})(Candidates);
