import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE
} from "../actions";

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  isFetchingSmurfs: false,
  isAddingSmurf: false,
  isUpdatingSmurf: false,
  isDeletingSmurf: false,
  error: null
};
const smurfsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    // ================================ GETTING DATA ====================
    case FETCHING_SMURFS:
      return { ...state, isFetchingSmurfs: true, error: null };

    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingSmurfs: false,
        error: null
      };

    case FETCHING_SMURFS_FAILURE:
      return { ...state, isFetchingSmurfs: false, error: action.payload };

    default:
      return state;
  }
};

export default smurfsReducer;
