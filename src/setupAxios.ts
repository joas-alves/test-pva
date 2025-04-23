import axios from 'axios';

const setupAxios = () => {
  // Set the base URL with the CORS proxy
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // Set default headers
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};

export default setupAxios;
