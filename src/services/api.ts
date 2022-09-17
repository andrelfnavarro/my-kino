import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5fbf115906fec01189e6da43b1634857',
  },
});

export default api;
