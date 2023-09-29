import axios from './../http-common.js'




const registerUser = (payload) => {
    return axios.post('/users', {
        data: payload
    })
}

const otpVerify = (payload) => {
    return axios.post('/users/verify', {
        data: payload
    })
}


export {
    registerUser,
    otpVerify
}