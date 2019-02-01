import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
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

    // ================================ ADDING NEW FRIEND  ====================
    case ADD_SMURF_START:
      return { ...state, isAddingSmurf: true, error: null };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isAddingSmurf: false,
        error: null
      };

    case ADD_SMURF_FAILURE:
      return { ...state, isAddingSmurf: false, error: action.payload };

    // ================================ DELETING A FRIEND ====================
    case DELETE_SMURF_START:
      return { ...state, isDeletingSmurf: true, error: null };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeletingSmurf: false,
        error: null
      };

    case DELETE_SMURF_FAILURE:
      return { ...state, isDeletingSmurf: false, error: action.payload };
    default:
      return state;
  }
};

export default smurfsReducer;
