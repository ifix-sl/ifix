import axios from 'axios'



export default axios.create({
    baseURL: 'http://54.169.229.45:3000',
    headers: {
        'Content-type': 'application/json'
    }
})