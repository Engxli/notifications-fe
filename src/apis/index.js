import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.2.144:8001",
});

export default instance;
