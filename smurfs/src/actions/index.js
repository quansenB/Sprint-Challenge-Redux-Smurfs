/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

export const FETCHING = "FETCHING";
export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

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

export function success() {
  return {
    type: SUCCESS
  };
}

export function addSmurf(newSmurf) {
  return {
    type: ADD_SMURF,
    payload: newSmurf
  };
}

export function getSmurfs() {
  return dispatch => {
    dispatch(fetching());
    axios
      .get("http://localhost:3333/smufs")
      .then(res => {
        res.data.map(newSmurf => {
          dispatch(addSmurf(newSmurf));
        });
        dispatch(success());
      })
      .catch(err => {
        dispatch(failure());
      });
  };
}
