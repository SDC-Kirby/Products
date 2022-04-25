import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '10s'
};

export default function () {

  const params = {
    headers: {
      authorization: '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'
    }
  }
  http.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/styles', params);
}