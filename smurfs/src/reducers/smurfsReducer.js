import {
  FETCH_SMURFS,
  UPDATE_SMURFS,
  SET_ERROR,
  GET_POST_SMURFS,
  UPDATE_POST_SMURFS,
  SET_POST_ERROR,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isFetchingData: true,
        smurfs: [],
        error: "",
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };

    case GET_POST_SMURFS:
      return {
        ...state,
        isPostingData: true,
        smurfs: [],
        error: "",
      };
    case UPDATE_POST_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isPostingData: false,
        error: "",
      };
    case SET_POST_ERROR:
      return {
        ...state,
        isPostingData: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
