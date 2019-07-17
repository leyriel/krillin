let API_URL;
if (process.env.NODE_ENV == "development") {
    API_URL = 'http://sandstorm-api-dev.src-creative.net';
}

if (process.env.NODE_ENV == "production") {
    API_URL = 'http://sandstorm-api-dev.src-creative.net';
}

const config = {
    apiUrl: API_URL,
};

export default config;