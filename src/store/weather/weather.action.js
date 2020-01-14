import * as Api from "../../services/weather.service";

export const TYPES = {
  REQUEST_WEATHER: "REQUEST_WEATHER",
  SUCCESS_WEATHER: "SUCCESSS_WEATHER",
  ERROR_WEATHER: "ERROR_WEATHER"
};

export const getWeather = region => async (dispatch, getState) => {
  dispatch({
    type: TYPES.REQUEST_WEATHER
  });
  try {
    const response = await Api.weather(region);
    dispatch({
      type: TYPES.SUCCESS_WEATHER,
      payload: {
        weather: response.map(item => ({
          ...response,
          temp: item.temp.toFixed(),
          tempMin: item.tempMin.toFixed(),
          tempMax: item.tempMax.toFixed()
        })),
        region
      }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_WEATHER,
      payload: { error: error }
    });
    throw new Error(error);
  }
};
