import { news } from "../../__mock__/news"

const getNews = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
       resolve(news)
       }, 2000)
    })
  }

export {
  getNews
}