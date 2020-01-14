import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://youpluv.herokuapp.com/"
});
