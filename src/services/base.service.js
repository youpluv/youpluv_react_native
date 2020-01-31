import Axios from "axios";
import { AsyncStorage } from "react-native";

export const axiosInstance = async () => {
  const instance = Axios.create({
    baseURL: "https://youpluv.herokuapp.com/api/",
    headers: {
      Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
    }
  });
  return instance;
};
