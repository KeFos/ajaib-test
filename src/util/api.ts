import axios from 'axios';
import { userKeys } from '../common/user';

const BASE_URL = `https://randomuser.me/api/`;

const axiosService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        results: 10,
        inc: userKeys.join(',')
    }
});

export default axiosService;
