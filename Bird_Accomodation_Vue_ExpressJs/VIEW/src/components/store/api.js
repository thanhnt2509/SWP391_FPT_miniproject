import axios from 'axios'

const api = axios({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
    timeout: 3000,

})

export default api