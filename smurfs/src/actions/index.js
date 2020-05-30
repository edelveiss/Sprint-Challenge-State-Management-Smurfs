import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const GET_POST_SMURFS = "GET_POST_SMURFS";
export const UPDATE_POST_SMURFS = "UPDATE_POST_SMURFS";
export const SET_POST_ERROR = "SET_POST_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};

export const getPostData = (smurfPost) => (dispatch) => {
  dispatch({ type: GET_POST_SMURFS });

  axios
    .post("http://localhost:3333/smurfs", smurfPost)
    .then((res) => {
      console.log("UPDATE_POST_SMURFS", res);
      dispatch({ type: UPDATE_POST_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_POST_ERROR,
        payload: "error fetching data from api",
      });
    });
};
