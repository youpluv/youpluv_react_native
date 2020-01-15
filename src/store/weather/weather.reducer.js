import { TYPES } from "./weather.action";

const initial_state = {
  data: [],
  error: "",
  loading: false
};

export default reducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_WEATHER:
      return { ...state, loading: true };
    case TYPES.SUCCESS_WEATHER:
      return {
        ...state,
        data: action.payload.weather,
        region: action.payload.region,
        loading: false
      };
    case TYPES.ERROR_WEATHER:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
