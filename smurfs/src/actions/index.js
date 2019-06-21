import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = "FETCHING";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURFS = "ADD_SMURFS";
export const FAILURE = "FAILURE";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function fetching() {
  return {
    type: FETCHING
  };
}

export function failure() {
  return {
    type: FAILURE
  };
}

export function addSmurf(newSmurf) {
  return {
    type: ADD_SMURF,
    payload: newSmurf
  };
}

export function addSmurfs(data) {
  return {
    type: ADD_SMURFS,
    payload: data
  };
}

export function getSmurfs() {
  return dispatch => {
    dispatch(fetching());
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch(addSmurfs(res.data));
      })
      .catch(err => {
        dispatch(failure());
      });
  };
}

export const postSmurf = newSmurf => dispatch => {
  return axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch(addSmurf(res.data[res.data.length-1]));
    })
    .catch(err => {
      dispatch(failure());
    });
};
