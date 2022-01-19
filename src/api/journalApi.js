import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-4890e-default-rtdb.firebaseio.com'
})

// variables de entorno
// console.log(process.env.NODE_ENV) // test => variable de entorno cuando estoy probando

export default journalApi