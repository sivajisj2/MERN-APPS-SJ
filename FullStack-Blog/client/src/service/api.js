import axios from 'axios'

const API_URL = "https://5000-sivajisj2-mernappssj-c594900gaye.ws-us105.gitpod.io"
const axiosInstance = axios.create({
   baseURL:API_URL,
   timeout: 10000,
   headers: {
    "Content-Type" :"application/json"
   }

})

axiosInstance.interceptors.request.use(
    function(config){
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    
)