import { axiosInstance } from "../services/base.service";

export const weather = params => {
  return axiosInstance
    .get("weather?q=" + params)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
          message = "Ocorreu um erro inesperado";
      }
    });
};
