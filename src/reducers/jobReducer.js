import jobData from "../store/fakeJobData";
import candidateData from "../store/fakePersonData";
import {
  ACCEPT_THE_JOB,
  REJECT_THE_JOB,
  REVERSE_THE_DECISION,
  ADD_THE_CANDIDATE,
} from "../actions/actiontypes";

/* eslint-disable */
const initialState = {
  allJobs: jobData,
  allCandidates: candidateData,
};

/* helper functions */

// find & remove an item from array
const filterAnItem = (arrayToFilter, type, itemId) => {
  return arrayToFilter.filter((item) => item[type] == itemId)[0];
};

// return an array without without the specified itemId
const filterAnArray = (arrayToFilter, type, itemId) => {
  return arrayToFilter.filter((item) => item[type] != itemId);
};

const jobReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ACCEPT_THE_JOB:
      // find the accepted job
      let acceptedJob = filterAnItem(state.allJobs, "id", action.payload);
      // change the status
      acceptedJob = { ...acceptedJob, status: "accepted" };
      // remove the accepted job with
      const jobAfterAccept = filterAnArray(state.allJobs, "id", action.payload);
      return { ...state, allJobs: [...jobAfterAccept, acceptedJob] };
      break;

    case REJECT_THE_JOB:
      let rejectedJob = filterAnItem(state.allJobs, "id", action.payload);
      rejectedJob = { ...rejectedJob, status: "rejected" };
      const jobsAfterRej = filterAnArray(state.allJobs, "id", action.payload);

      return { ...state, allJobs: [...jobsAfterRej, rejectedJob] };
      break;

    case REVERSE_THE_DECISION:
      let reversedJob = filterAnItem(state.allJobs, "id", action.payload.id);
      reversedJob = { ...reversedJob, status: action.payload.status };
      const jobsArrayAfterReverse = filterAnArray(
        state.allJobs,
        "id",
        action.payload.id
      );
      
      return { ...state, allJobs: [...jobsArrayAfterReverse, reversedJob] };

    case ADD_THE_CANDIDATE:
      let targetJob = filterAnItem(state.allJobs, "id", action.payload.jobId);
      targetJob.candidates += 1;
      let allJobs = filterAnArray(state.allJobs, "id", action.payload.jobId);
      let allCandidates = filterAnArray(
        state.allCandidates,
        "id",
        action.payload.candidateId
      );

      return {
        allJobs: [...allJobs, targetJob],
        allCandidates: [...allCandidates],
      };
  }
  return state;
};

export default jobReducer;
