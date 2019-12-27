const initial_state = {
  data: {},
  error: "",
  loading: false
};

export default reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return { ...state, loading: true };
      break;
    case "SUCCESS_LOGIN":
      return { ...state, data: action.payload.user, loading: false };
    case "ERROR_LOGIN":
      return { ...state, error: action.payload.error, loading: false };
    case "REMOVE_USER":
      return { ...state, data: {}, error: false, loading: false };
    case "REQUEST_REGISTER":
      return { ...state, loading: true };
      break;
    case "SUCCESS_REGISTER":
      return { ...state, data: action.payload.user, loading: false };
    case "ERROR_REGISTER":
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
