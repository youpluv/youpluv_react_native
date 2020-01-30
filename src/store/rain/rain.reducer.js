import { TYPES } from "./rain.action";

const initial_state = {
  success: false,
  error: "",
  loading: false,
  data:[],
};

export default rainReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.SAVE_RAIN_DATA:
      return { ...state, loading: true };
    case TYPES.SUCCESS_SAVE_RAIN_DATA:
      return {
        ...state,
        success: action.payload,
        loading: false
      };
    case TYPES.ERROR_SAVE_RAIN_DATA:
      return { ...state, error: action.payload.error, loading: false };
    case TYPES.CLEAR_RAIN_DATA:
      return { ...initial_state };
    case TYPES.REQUEST_RAIN_DATA:
      return { ...state, loading: true };
      case TYPES.SUCESS_RAIN_DATA:
        return { ...state, data: action.payload.registry, loading: false };
        case TYPES.ERROR_NEWS:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
