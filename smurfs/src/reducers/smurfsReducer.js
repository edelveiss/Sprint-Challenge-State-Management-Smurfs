import { FETCH_SMURFS, UPDATE_SMURFS, SET_ERROR } from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,

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

    default:
      return state;
  }
};
