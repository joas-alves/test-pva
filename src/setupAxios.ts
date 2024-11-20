import axios from 'axios';

const setupAxios = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
};

export default setupAxios;
