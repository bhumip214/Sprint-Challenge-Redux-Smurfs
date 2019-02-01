import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(respond =>
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: respond.data
      })
    )
    .catch(error =>
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error })
    );
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: DELETE_SMURF_FAILURE, payload: error }));
};
