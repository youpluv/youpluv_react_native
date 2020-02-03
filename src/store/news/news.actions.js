import * as Api from "../../services/news.service";

export const TYPES = {
  REQUEST_NEWS: "REQUEST_NEWS",
  SUCCESS_NEWS: "SUCCESSS_NEWS",
  ERROR_NEWS: "ERROR_NEWS",
  SET_NOTIFICATION: "SET_NOTIFICATION",
  CLEAR_NOTIFICATION: "CLEAR_NOTIFICATION"
};

export const getNews = () => async dispatch => {
  dispatch({
    type: TYPES.REQUEST_NEWS
  });
  try {
    const response = await Api.getNews();
    dispatch({
      type: TYPES.SUCCESS_NEWS,
      payload: { news: response }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_NEWS,
      payload: { error: error }
    });
  }
};

export const setNotification = notification => ({
  type: TYPES.SET_NOTIFICATION,
  payload: notification
});

export const clearNotification = () => ({
  type: TYPES.CLEAR_NOTIFICATION
});
