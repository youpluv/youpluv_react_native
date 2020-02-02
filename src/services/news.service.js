import { axiosInstance } from "../services/base.service";

const getNews = async () => {
  return (await axiosInstance())
    .get("news")
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log("ERROR NEWS SERVICE :: ", error);
      let message = "Ocorreu um erro inesperado";
    });
};

export { getNews };
