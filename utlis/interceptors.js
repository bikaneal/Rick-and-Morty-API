export function handleRequest(config) {
    console.log('Здесь можете сделать что-нибудь с перед отправкой запроса');
    console.log(config);
    return config;
}

export function handleResponse(response) {
    console.log('Здесь можете сделать что-нибудь с ответом');
    console.log(response);
    return response;
}

export function handleRequestError(error) {
    console.log('Сделайте что-нибудь с ошибкой запроса');
    return Promise.reject(error);
}

export function handleResponseError(error) {
    console.log('Здесь можете сделать что-то с ошибкой ответа');
    return Promise.reject(error);
}