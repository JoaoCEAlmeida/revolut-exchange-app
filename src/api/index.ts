import axios from 'axios';
const API_ID = process.env.REACT_APP_API_ID;

export default (currencies: string) =>
  axios
    .get(`https://openexchangerates.org/api/latest.json?app_id=${API_ID}&symbols=${currencies}`)
    .then((resp) => resp.data.rates);
