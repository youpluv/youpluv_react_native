import * as Api from "../../services/Auth.service";

const requestLogin = () => ({
  type: "REQUEST_LOGIN"
});

const successLogin = user => ({
  type: "SUCCESS_LOGIN",
  payload: { user }
});

const errorLogin = error => ({
  type: "ERROR_LOGIN",
  payload: { error }
});

export const removeUser = () => ({
  type: "REMOVE_USER"
});

const requestRegister = () => ({
  type: "REQUEST_REGISTER"
});

const successRegister = user => ({
  type: "SUCCESS_REGISTER",
  payload: { user }
});

const errorRegister = error => ({
  type: "ERROR_REGISTER",
  payload: { error }
});

export const login = body => async (dispatch, getState) => {
  dispatch(requestLogin());
  try {
    const response = await Api.login(body);
    dispatch(successLogin(response));
  } catch (error) {
    dispatch(errorLogin(error));
  }
};

export const register = body => async (dispatch, getState) => {
  dispatch(requestRegister());
  try {
    const response = await Api.register(body);
    dispatch(successRegister(response));
  } catch (error) {
    dispatch(errorRegister(error));
  }
};
