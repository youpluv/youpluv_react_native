import * as Api from "../../services/Auth.service";
import { AsyncStorage } from "react-native";

export const TYPES = {
  REQUEST_LOGIN: "REQUEST_LOGIN",
  SUCCESS_LOGIN: "SUCCESSS_LOGIN",
  ERROR_LOGIN: "ERROR_LOGIN",
  REQUEST_REGISTER: "REQUEST_REGISTER",
  SUCCESS_REGISTER: "SUCCESS_REGISTER",
  ERROR_REGISTER: "ERROR_REGISTER",
  REMOVE_USER: "REMOVE_USER",
  SET_GEOLOCATION: "SET_GEOLOCATION"
};

export const setGeolocation = geolocation => ({
  type: TYPES.SET_GEOLOCATION,
  payload: geolocation
});

export const removeUser = () => ({
  type: TYPES.REMOVE_USER
});

export const login = body => async (dispatch, getState) => {
  dispatch({
    type: TYPES.REQUEST_LOGIN
  });
  try {
    const response = await Api.login(body);
    AsyncStorage.setItem("token", response.token);
    dispatch({
      type: TYPES.SUCCESS_LOGIN,
      payload: { user: response }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_LOGIN,
      payload: { error: error }
    });
  }
};

export const socialLogin = method => async (dispatch, getState) => {
  dispatch({
    type: TYPES.REQUEST_LOGIN
  });
  try {
    const response = await Api.socialLogin(method);
    AsyncStorage.setItem("token", response.token);
    dispatch({
      type: TYPES.SUCCESS_LOGIN,
      payload: { user: response }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_LOGIN,
      payload: { error: error }
    });
  }
};
export const logInFb = () => async (dispatch, getState) => {
  dispatch({
    type: TYPES.REQUEST_LOGIN
  });
  try {
    const response = await Api.logInFb();
    AsyncStorage.setItem("token", response.token);
    dispatch({
      type: TYPES.SUCCESS_LOGIN,
      payload: { user: response }
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR_LOGIN,
      payload: { error: error }
    });
  }
};

export const register = body => async (dispatch, getState) => {
  dispatch({
    type: TYPES.REQUEST_REGISTER
  });
  try {
    const response = await Api.register(body);
    AsyncStorage.setItem("token", response.token);
    console.log("SUCCESS :: ", response);
    dispatch({
      type: TYPES.SUCCESS_REGISTER,
      payload: { user: response }
    });
  } catch (error) {
    console.log("ERROR :: ", error);
    dispatch({
      type: TYPES.ERROR_REGISTER,
      payload: { error: error }
    });
  }
};
