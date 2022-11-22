import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://192.168.0.100:8080"
})
export default axiosInstance;