import axios from 'axios';

const setupAxios = () => {
  // Set the base URL with the CORS proxy
  axios.defaults.baseURL = `https://proxy.cors.sh/${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}`;
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // Set default headers
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers['x-cors-api-key'] = 'temp_5fc8c2713d7402082ba0ba3ba02d1202'; // Using your existing API key
};

export default setupAxios;
