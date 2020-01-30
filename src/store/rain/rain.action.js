import * as Api from "../../services/registry.service";

export const TYPES = {
  SAVE_RAIN_DATA: "SAVE_RAIN_DATA",
  SUCCESS_SAVE_RAIN_DATA: "SUCCESS_SAVE_RAIN_DATA",
  ERROR_SAVE_RAIN_DATA: "ERROR_SAVE_RAIN_DATA",
  CLEAR_RAIN_DATA: "CLEAR_RAIN_DATA",
  REQUEST_RAIN_DATA: "REQUEST_RAIN_DATA",
  SUCESS_RAIN_DATA: "SUCESS_RAIN_DATA",
  ERROR_RAIN_DATA: "ERROR_RAIN_DATA",
};

export const clearRainData = () => ({
  type: TYPES.CLEAR_RAIN_DATA
});

export const postRainData = body => async (dispatch, getState) => {
  dispatch({
    type: TYPES.SAVE_RAIN_DATA
  });
  try {
    const response = await Api.postRainFall(body);
    console.log("DADOS PLUVIOMETRICOS :: ", response);
    dispatch({
      type: TYPES.SUCCESS_SAVE_RAIN_DATA,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_SAVE_RAIN_DATA,
      payload: { error: error }
    });
    throw new Error(error);
  }
};

export const getRainData = () => async (dispatch) => {
  dispatch({
    type: TYPES.REQUEST_RAIN_DATA
  });
  try {
    const response = await Api.getRegistry();
    dispatch({
      type: TYPES.SUCESS_RAIN_DATA,
      payload: { registry: response }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_RAIN_DATA,
      payload: { error: error }
    });
  }
};