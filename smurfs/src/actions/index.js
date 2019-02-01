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

export {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  getSmurfs
} from "./smurfsAction";

export {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  addSmurf
} from "./formActions";
