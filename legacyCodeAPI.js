import http from 'k6/http';
import { sleep } from 'k6';
const TOKEN = require('./config');

export const options = {
  vus: 100,
  duration: '10s'
};

export default function () {

  const params = {
    headers: {
      authorization: TOKEN
    }
  }
  http.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/styles', params);
}