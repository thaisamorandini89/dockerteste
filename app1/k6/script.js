import http from 'k6/http';
import { check } from 'k6';

const HOST_IP = __ENV.HOST_IP

export const options = {
  stages: [
    { target: 20, duration: '2m' }
  ]
};

export default function () {
  const res = http.get(`http://127.0.0.1:49387/shipping`);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200
  });
}