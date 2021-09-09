import axios from "axios";

const NO_CONTENT = 204;
const UNAUTHORIZED = 401;

const _pendingRequests = {};
const BaseUrl = 'https://dashboard.test.altseasons.com/';

const TokenKey = 'token'

// const abortPendingRequests = (key) => {
//   if (_pendingRequests[key]) {
//     _pendingRequests[key]('REQUEST_CANCELLED');
//     _pendingRequests[key] = null;
//   }
// };

// const isInvalidToken = (response) => {
//   if (response.status !== UNAUTHORIZED) {
//     return false;
//   }

//   const authHeader = response.headers.get('WWW-Authenticate') || '';

//   return authHeader.includes('invalid_token');
// };

// const processResponse = (res) => {
//   if (isInvalidToken(res)) {
//     return { data: {} };
//   }

//   if (res.status === NO_CONTENT) {
//     const response = Object.assign({}, res, { data: {} });
//     return response;
//   }
//   return res;
// };

// const handleResponse = (key, options, response, jsonResponse) => {
//   const jsonRes = _.isEmpty(jsonResponse) ? {} : jsonResponse;
//   const { status } = response;
//   const { errors } = Object.assign({}, jsonRes);
//   const resp = {
//     status,
//     body: jsonResponse,
//     errors,
//     headers: response.headers,
//   };

//   // use any dispatchers/method to communicate this data to the store/view
//   // dispatch(key, resp)
// };

const API = {
      getHeaders() {
    return {
         Authorization: `Bearer ${localStorage.getItem(TokenKey)}`};
  },

    makeGetRequest(url) {
        return axios.get(BaseUrl+url, {headers: this.getHeaders()} );
    },

    makePostRequest(url, body) {
        ;
        return axios.post(BaseUrl + url, body,{headers:this.getHeaders()});
    },
    getTokenKey() {
        ;
        return TokenKey;
    }
    
};

export default API;
