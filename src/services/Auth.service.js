import { ToastAndroid } from "react-native";
import * as Facebook from "expo-facebook";
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

const signInGoogleAsync = async () => {
  try {
    const { type, accessToken, ...tudo } = await Google.logInAsync(config);
    // console.log(type, accessToken, tudo);
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

const signFacebook = async () =>{
  try {
    await Facebook.initializeAsync("641247119948894");
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", 'email']
    });
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,email,picture.type(large)`
      ).then(res=> res.json())         
      let picture = response.picture.data.url
      let userInfoResponse = {...response, picture}     
      return userInfoResponse
    }
  } catch ({ message }) {
    console.log(`Facebook Login Error: ${message}`);
  }
}

export const socialLogin = async (method) => {
  
  const socialUser = (method === 'facebook' ? 
    await signFacebook() : 
    await signInGoogleAsync()
  )
  
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
        case 500:
          message = "Internal Server Error"
      }     
      ToastAndroid.show(message, ToastAndroid.LONG);
      return;
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
