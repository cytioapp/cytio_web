const axios = require('axios');

const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2000,
  headers,
});

export const createRequest = method => async (url, data) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    if (err.response) {
      return {
        success: false,
        ...err.response.data,
      };
    }
    return {
      success: false,
      data: 'Something gone wrong...',
    };
  }
};

export const api = {
  get: createRequest('GET'),
  post: createRequest('POST'),
  put: createRequest('PUT'),
  delete: createRequest('DELETE'),
  request: (url, method = 'GET') => createRequest(method)(url),
};
