import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-dc4d5/us-central1/api' //The API URL
})

export default instance