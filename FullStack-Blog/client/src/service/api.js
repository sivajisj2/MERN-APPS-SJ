import axios from 'axios'
const { API_NOTIFICATION_MESSAGE } = require('../constants/config');


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
    function(response){
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(error))
    }
    
)


// if success -> return {isSuccess :true, data:object ,code :200}
// if failure -> return {isFailure :true,status :String ,msg:String,code :int}
const processResponse =(response) => {

    if(response?.status === 200){
        return {isSuccess :true, data:response.data}
    }else{
        return {
            isFailure :true,
            status :response?.status,
            msg:response?.msg,
            code :response?.code}
    }

}




// if success -> return {isSuccess :true, data:object ,code :200}
// if failure -> return {isFailure :true,status :String ,msg:String,code :int}
const processError = (error) => {

    if(error.response){
        // request made ad server responded with other status code
           //that  fils out of range 2.x.x
           console.log("ERROR IN RESPONSE",error.toJSON());
           return{
            isError :true,
            msg: API_NOTIFICATION_MESSAGE.responseFailure,
            code :error.response.status
           }
    }else if(error.request){
        //request made and no responce received
        console.log("ERROR IN REQUEST",error.toJSON());
           return{
            isError :true,
            msg: API_NOTIFICATION_MESSAGE.requestFailure,
            code :""
           }

    }else{
        //something happened in the setting up
        console.log("ERROR IN NETWORK ",error.toJSON());
           return{
            isError :true,
            msg: API_NOTIFICATION_MESSAGE.networkError,
            code :""
           }
    }
}

const API ={}