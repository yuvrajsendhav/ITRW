import axios from 'axios';
import {
    AUTHORIZATION_HEADER_NAME,
    getAuthorizationHeaderValue,
    setAuthToken,
} from '@/utils/auth';

import { COMMON } from '@/utils/constants';
import { PlatformOS } from '@/config';

const API_METHOD = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH',
};

const API_END_POINT = {
    //SEND_OTP: '/api/Login/SendOTP',
    //GET_FEED_POST: '/GetFeedPost?Mobile_No={0}&pageNumber={1}&pageSize={2}',
};

// export const sendOtp = async number => {
//     return await _baseRequest(API_END_POINT.SEND_OTP, API_METHOD.post, {
//         Mobile_NO: number,
//     }).then(loginResponse => {
//         console.log('login Response=>', loginResponse);
//         return loginResponse;
//     });
// };

// export const getFeedPost = async (Mobile_No, pageNumber, pageSize) => {
//     return await _baseRequest(
//         COMMON.stringFormat(
//             API_END_POINT.GET_FEED_POST,
//             Mobile_No,
//             pageNumber,
//             pageSize,
//         ),
//         API_METHOD.get,
//     ).then(response => {
//         return response;
//     });
// };


const _baseRequest = async (
    url = '',
    method = API_METHOD.get,
    data = PlatformOS === 'ios' ? undefined : {},
    headers,
) => {
    return await apiClient
        .request({
            method,
            url,
            headers,
            data,
            timeoutErrorMessage: 'Request timeout',
        })
        .then(response => response.data)
        .catch(err =>
            Promise.reject({
                name: err.name,
                message: err.message,
                status: err.response?.status || -1,
                data: err.response?.data,
            }),
        );
};

const _authorizedRequest = async (
    url = '',
    method = API_METHOD.get,
    data = {},
    headers = '',
) => {
    return await getAuthorizationHeaderValue().then(authHeaderValue => {
        if (!headers) {
            headers = {};
        }
        headers[AUTHORIZATION_HEADER_NAME] = authHeaderValue || '';
        return _baseRequest(url, method, data, headers);
    });
};

const apiClient = axios.create({
    baseURL: COMMON.apiBaseUrl(),
    headers: {
        'Content-type': 'application/json',
    },
    timeout: 10000,
});
