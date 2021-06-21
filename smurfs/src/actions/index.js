import axios from "axios";

export const DATA_START = "DATA_START";
export const DATA_RETURN = "DATA_RETURN";
export const DATA_ERROR = "DATA_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: DATA_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(results => {
      console.log(results.data);
      dispatch({ type: DATA_RETURN, payload: results.data });
    })
    .catch(error => {
      dispatch({ type: DATA_ERROR, payload: "Error", error });
    });
};
