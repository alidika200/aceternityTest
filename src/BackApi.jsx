import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://localhost:7005/', 
});

// Add a request interceptor
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = Bearer ;{token};
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;