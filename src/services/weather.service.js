import { axiosInstance } from "../services/base.service";

export const weather = params => {
  return axiosInstance
    .get("weather?q=" + params)
    .then(res => {
      console.log(res, "res");
      return res.data;
    })
    .catch(error => {
      console.log(error, "error");
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
          message = "Ocorreu um erro inesperado";
      }
    });
};
