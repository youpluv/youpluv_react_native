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

const getRegistry = async () => {
  return (await axiosInstance())
    .get("rainfall")
    .then(res => {
      ToastAndroid.show("Registro enviado com sucesso!", ToastAndroid.LONG);
      return res.data;
    })
    .catch(error => {
      console.log("ERROR RAIND SERVICE :: ", error);
      let message = "Ocorreu um erro inesperado";
    });
};

export { postRainFall, getRegistry };
