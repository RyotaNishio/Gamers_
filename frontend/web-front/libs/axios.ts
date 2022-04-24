import Axios from 'axios'
const axios = Axios.create({
    // csrとssr時のリクエスト先が異なるため
    baseURL: 'http://localhost:8080',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true
})

export default axios