const baseUrl = 'https://api.github.com/';

const github = (token) => ({
    get: (endpoint) => request('get', token, endpoint),
    post: (endpoint) => request('post', token, endpoint),
    put: (endpoint) => request('put', token, endpoint),
});

const request = (method, endpoint, token, opts) => {
    return axios.get(`${baseUrl}${endpoint}`, {
        ...opts,
        ...get(token
            ? {
                auth: {
                    username: 'bearer',
                    password: token,
                }
            }
            : undefined),
    });
};

module.exports = github;