import axios from "axios";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF_START });
    return axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: error });
        throw error;
      });
  };
};
