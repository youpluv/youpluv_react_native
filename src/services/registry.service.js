import { axiosInstance } from "../services/base.service";
import { ToastAndroid } from "react-native";
import { registry } from "../../__mock__/registry";

const postRainFall = async params => {
  return (await axiosInstance())
    .post("rainfall", params)
    .then(res => {
      ToastAndroid.show("Registro enviado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error => {
      console.log("ERROR RAIND SERVICE :: ", error);
      let message = "Ocorreu um erro inesperado";
    });
};

const getRegistry = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve(registry)
    }, 2000)
  })
}

export { postRainFall, getRegistry };
