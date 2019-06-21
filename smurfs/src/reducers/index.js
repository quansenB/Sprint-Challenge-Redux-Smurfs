/*
  Be sure to import in all of the action types from `../actions`
*/
import * as types from "../actions/index";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SMURFS:
      return { smurfs: action.payload, fetchingSmurfs: false, error: null };
    case types.FETCHING:
      return { ...state, fetchingSmurfs: true };
    case types.ADD_SMURF:
      return { smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false, error: null};
    case types.FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "Failed operation, please try again..."
      };
    default:
      return state;
  }
};
