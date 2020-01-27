import { TYPES } from "./news.actions";

const initial_state = {
  data: [],
  error: "",
  loading: false
};

export default newsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_NEWS:
      return { ...state, loading: true };
      break;
    case TYPES.SUCCESS_NEWS:
      return { ...state, data: action.payload.news, loading: false };
    case TYPES.ERROR_NEWS:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
