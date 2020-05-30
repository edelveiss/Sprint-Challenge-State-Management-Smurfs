import {
  FETCH_SMURFS,
  UPDATE_SMURFS,
  SET_ERROR,
  GET_POST_SMURFS,
  UPDATE_POST_SMURFS,
  SET_POST_ERROR,
  GET_DEL_SMURFS,
  UPDATE_DEL_SMURFS,
  SET_DEL_ERROR,
  GET_UPDATE_SMURFS,
  UPDATE_UPDATE_SMURFS,
  SET_UPDATE_ERROR,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  isDelitingData: false,
  isUpdatingData: false,
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
    case GET_DEL_SMURFS:
      return {
        ...state,
        isDelitingData: true,
        smurfs: [],
        error: "",
      };
    case UPDATE_DEL_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isDelitingData: false,
        error: "",
      };
    case SET_DEL_ERROR:
      return {
        ...state,
        isDelitingData: false,
        error: action.payload,
      };

    case GET_UPDATE_SMURFS:
      return {
        ...state,
        isUpdatingData: true,
        smurfs: [],
        error: "",
      };
    case UPDATE_UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isUpdatingData: false,
        error: "",
      };
    case SET_UPDATE_ERROR:
      return {
        ...state,
        isUpdatingData: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
