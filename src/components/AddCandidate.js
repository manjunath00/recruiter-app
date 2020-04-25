import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTheCandidate } from "../actions";
import Modal from "./common/Modal";
import history from "../history";

const AddCandidate = (props) => {
  const jobId = props.match.params.id;
  const [candidateId, setCandidateId] = useState("");

  const onSubmit = () => {
    props.addTheCandidate(jobId, candidateId);
    history.goBack();
  };

  return (
    <Modal>
      <div className="add-candidate-modal">
        <div className="job-title">
          <strong>Job Title</strong>
        </div>
        <div className="flex">
          <div>
            <select onChange={(e) => setCandidateId(e.target.value)}>
              <option>Select candidate</option>
              {props.candidates.map((candidate) => (
                <option
                  key={candidate.id}
                  value={candidate.id}
                  id={candidate.person}>
                  {candidate.person}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => onSubmit()}>
              Add
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

AddCandidate.propTypes = {
  candidates: PropTypes.array.isRequired,
  addTheCandidate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { candidates: state.jobs.allCandidates };
};

export default connect(mapStateToProps, { addTheCandidate })(AddCandidate);
