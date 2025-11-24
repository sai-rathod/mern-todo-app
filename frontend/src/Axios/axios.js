import axios from "axios"
const instance = axios.create({
    baseURL: "http://172.23.76.115/api"  // Production (Kubernetes)
    // baseURL: "http://localhost:8000/api"  // Local development
})
export default instance
