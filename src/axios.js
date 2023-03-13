// import axios from "axios";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/sample"
})
export default instance;