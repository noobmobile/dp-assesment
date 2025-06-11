import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => config,
  error => handleError(error)
);

api.interceptors.response.use(
  response => response,
  error => handleError(error)
);

const httpErrorHandler = error => {
  if (error?.response?.data?.error) {
    // toast
    console.error('API Error:', error.response.data.error);
  }
};

const handleError = error => {
  console.error(error);
  httpErrorHandler(error);
  return Promise.reject(error);
};


export default api;
