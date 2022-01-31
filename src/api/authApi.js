import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBmQOJAtm__qImXC2DsIwDklsEEgiyRK7Y'
    }
})

// variables de entorno
// console.log(process.env.NODE_ENV) // test => variable de entorno cuando estoy probando

export default authApi