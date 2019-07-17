import axios from 'axios';
import config from '../env';

const axiosClient = axios.create();
console.log(config.apiUrl);

axiosClient.defaults.baseURL = config.apiUrl;

//axiosClient.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axiosClient.defaults.headers.post['Content-Type'] = 'application/json';

const HttpClient = axiosClient;

const HttpClientConfig = {
    onDownloadProgress: progressEvent => console.log(progressEvent,"download"),
    onUploadProgress: progressEvent => {
        const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
        /*console.log(Math.round( (progressEvent.loaded * 100) / totalLength ));
        console.log(totalLength);*/

        /*for (let progress = Math.round( (progressEvent.loaded * 100) / totalLength ); progress < totalLength; progress++) {
            console.log(progress);
        }*/

        /*return {
            initProgressValue: Math.round( (progressEvent.loaded * 100) / totalLength ),
            totalLength: totalLength
        }*/
    }
};

export {HttpClient, HttpClientConfig}