const { YESCOIN_API_URL } = process.env;

const yescoinAxios = axios.create({
    baseURL: YESCOIN_API_URL,
    headers: {
        'content-type': 'application/json',
    }
})

yescoinAxios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

yescoinAxios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

export default yescoinAxios;