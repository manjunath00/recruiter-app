import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { acceptTheJob, rejectTheJob, reverseTheDecision } from "../../actions";
import { connect } from "react-redux";

const JobAction = ({
  status,
  id,
  acceptTheJob,
  rejectTheJob,
  reverseTheDecision,
}) => {
  if (status === null) {
    return (
      <>
        <div>
          <button className="btn btn-primary" onClick={() => acceptTheJob(id)}>
            Accept
          </button>
        </div>
        <div>
          <button className="btn btn-reject" onClick={() => rejectTheJob(id)}>
            Reject
          </button>
        </div>
      </>
    );
  } else if (status === "accepted") {
    return (
      <>
        <div>
          <button className="btn btn-primary">
            <Link to={`/jobs/accepted/${id}`}>Add candidates</Link>
          </button>
        </div>
        <div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => reverseTheDecision(id, status)}>
              Reject
            </button>
          </div>
        </div>
      </>
    );
  } else if (status === "rejected") {
    return (
      <>
        <div>
          <button className="text-red">Rejected</button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => reverseTheDecision(id, status)}>
            Accept
          </button>
        </div>
      </>
    );
  }
};

JobAction.propTypes = { 
  status: PropTypes.string,
  id: PropTypes.string.isRequired,
  acceptTheJob: PropTypes.func,
  rejectTheJob: PropTypes.func,
  reverseTheDecision: PropTypes.func,
};

export default connect(null, {
  acceptTheJob,
  rejectTheJob,
  reverseTheDecision,
})(JobAction);
