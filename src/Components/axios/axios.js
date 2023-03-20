import axios from "axios";
const instance = axios.create({
  baseURL: "http://143.110.241.20:5000",
  headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' },
});
export default instance;