export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title :"loading..",
        message : "Data is being loaded please wait"
    },
    success : {
        title : "Success",
        message : "Data is successfully loaded"
    },
    responseFailure :{
        title : "Error",
        message : "An error occued while fetching response from the server, please try again"
    },
    requestFailure :{
        title : "Error",
        message : "An error occued while parsingrequest data, please try again"
    },
    networkError :{
        title : "Error",
        message : "unable to connect with the server, please check network connection and please try again"
    },

}


export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' }
}

