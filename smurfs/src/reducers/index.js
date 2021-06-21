import { DATA_START, DATA_RETURN, DATA_ERROR } from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurf: [{ name: "", age: 0, height: "", id: 0 }]
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return { ...state, isLoading: true };
    case DATA_RETURN:
      return { ...state, smurf: action.payload, isLoading: false };
    case DATA_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default reducers;
