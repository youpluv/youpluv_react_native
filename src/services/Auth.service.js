import { ToastAndroid } from "react-native";

import Axios from "axios";
import * as Google from "expo-google-app-auth";

export const login = body => {
  return Axios.post("https://youpluv.herokuapp.com/login/", body)
    .then(res => {
      ToastAndroid.show("Logado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error => {
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
          message = "Usuário ou senha incorreto";
      }
      ToastAndroid.show(message, ToastAndroid.LONG);
    });
};

const config = {
  androidClientId: `717368453351-467lcq0q5lfu3jmf9t2ko7d6mpt0nn2a.apps.googleusercontent.com`
};

const signInAsync = async () => {
  try {
    const { type, accessToken, ...tudo } = await Google.logInAsync(config);
    console.log(type, accessToken, tudo);
    if (type === "success") {
      let userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      ).then(res => res.json());
      return userInfoResponse;
    }
  } catch ({ message }) {
    console.log("login: Error:" + message);
    return;
  }
};

export const socialLogin = async () => {
  const socialUser = await signInAsync();
  const formatedUser = {
    username: socialUser.name,
    email: socialUser.email,
    password: socialUser.id,
    picture: socialUser.picture
  };
  return Axios.post("https://youpluv.herokuapp.com/social-login/", formatedUser)
    .then(res => {
      ToastAndroid.show("Logado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error => {
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
          message = "Usuário ou senha incorreto";
      }
      ToastAndroid.show(message, ToastAndroid.LONG);
    });
};
export const logInFb = async () => {
  const socialUser = await signInAsync();
  const formatedUser = {
    username: socialUser.name,
    email: socialUser.email,
    password: socialUser.id,
    picture: socialUser.picture
  };
  return Axios.post("https://youpluv.herokuapp.com/social-login/", formatedUser)
    .then(res => {
      ToastAndroid.show("Logado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error => {
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
          message = "Usuário ou senha incorreto";
      }
      ToastAndroid.show(message, ToastAndroid.LONG);
    });
};

export const register = body => {
  return Axios.post("https://youpluv.herokuapp.com/register/", body)
    .then(res => {
      ToastAndroid.show("Cadastro realizado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error =>
      ToastAndroid.show("Ocorreu um erro inesperado", ToastAndroid.LONG)
    );
};
