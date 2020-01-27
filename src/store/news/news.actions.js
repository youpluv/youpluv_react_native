import * as Api from "../../services/news.service";

export const TYPES = {
  REQUEST_NEWS: "REQUEST_NEWS",
  SUCCESS_NEWS: "SUCCESSS_NEWS",
  ERROR_NEWS: "ERROR_NEWS"
};

export const getNews = () => async (dispatch) => {
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