import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.hieuaptech.com/api/",
});

export default instance;