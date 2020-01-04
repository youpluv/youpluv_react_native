import Axios from "axios";

export const weather = params => {
  console.log(params, "aprams");
  return Axios.get("http://192.168.1.115:3333/weather?q=" + params)
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
