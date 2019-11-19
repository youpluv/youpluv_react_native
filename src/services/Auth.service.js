import { ToastAndroid } from "react-native";

import Axios from "axios";

export const login = (body) => {
    return Axios.post("https://youpluv.herokuapp.com/login/", body)
    .then(res=> {
        ToastAndroid.show('Logado com sucesso!', ToastAndroid.LONG);
        return res.data
    }).catch(error => {
        let message = 'Ocorreu um erro inesperado'
        switch(error.response.status){
            case 401:
                message = "Usuário ou senha incorreto"
            }
        ToastAndroid.show(message, ToastAndroid.LONG)
    })
}

export const register = (body) => {
    return Axios.post("https://youpluv.herokuapp.com/register/", body)
    .then(res=> res.data)
    .catch(error => console.log("ERROR :: ", error))
}