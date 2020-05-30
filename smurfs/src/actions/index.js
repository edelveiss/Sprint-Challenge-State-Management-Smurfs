import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const GET_POST_SMURFS = "GET_POST_SMURFS";
export const UPDATE_POST_SMURFS = "UPDATE_POST_SMURFS";
export const SET_POST_ERROR = "SET_POST_ERROR";

export const GET_DEL_SMURFS = "GET_DEL_SMURFS";
export const UPDATE_DEL_SMURFS = "UPDATE_DEL_SMURFS";
export const SET_DEL_ERROR = "SET_DEL_ERROR";

export const GET_UPDATE_SMURFS = "GET_UPDATE_SMURFS";
export const UPDATE_UPDATE_SMURFS = "UPDATE_UPDATE_SMURFS";
export const SET_UPDATE_ERROR = "SET_UPDATE_ERROR";

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

export const deleteData = (delId) => (dispatch) => {
  dispatch({ type: GET_DEL_SMURFS });

  axios
    .delete(`http://localhost:3333/smurfs/${delId}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_DEL_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_DEL_ERROR,
        payload: "error fetching data from api",
      });
    });
};

export const updateData = (item) => (dispatch) => {
  dispatch({ type: GET_UPDATE_SMURFS });

  axios
    .put(`http://localhost:3333/smurfs/${item.id}`, item)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_UPDATE_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api. err: ", err);
      dispatch({
        type: SET_UPDATE_ERROR,
        payload: "error fetching data from api",
      });
    });
};
