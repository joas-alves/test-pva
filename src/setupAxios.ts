import axios from 'axios';

const setupAxios = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
   axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};

export default setupAxios;
