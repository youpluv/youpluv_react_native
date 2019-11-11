import Axios from "axios";

export const login = (body) => {
    return Axios.post("https://youpluv.herokuapp.com/login/", body)
    .then(res=> res.data)
    .catch(error => console.log("ERROR :: ", error))
}
