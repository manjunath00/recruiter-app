import {
  ACCEPT_THE_JOB,
  REJECT_THE_JOB,
  REVERSE_THE_DECISION,
  ADD_THE_CANDIDATE,
} from "./actiontypes";

export const acceptTheJob = (id) => {
  console.log(id);
  return {
    type: ACCEPT_THE_JOB,
    payload: id,
  };
};

export const rejectTheJob = (id) => {
  console.log(id);

  return {
    type: REJECT_THE_JOB,
    payload: id,
  };
};

export const reverseTheDecision = (id, status) => {
    const jobStatus = status === "rejected" ? "accepted" : "rejected";
  return {
    type: REVERSE_THE_DECISION,
    payload: {
      id,
      status: jobStatus
    },
  };
};

export const addTheCandidate = (jobId, candidateId) => {
  return {
    type: ADD_THE_CANDIDATE,
    payload: {
      jobId,
      candidateId
    }
  }
}
