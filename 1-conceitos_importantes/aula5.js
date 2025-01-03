import http from 'k6/http';
import { check }  from 'k6';

export const options = {
    vus: 1,
    duration: '3s',
    thresholds: {
        http_req_failed: ['rate < 0.01'], //definindo taxa de falha inferior a 1%
        http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true}], //definindo tempo de espera inferior a 200
        checks: ['rate > 0.99'] //definindo taxa de sucesso superior a 99%
    }
}

export default function () {
    const res = http.get('http://test.k6.io/')

    check(res, {
        'status code é 200': (r) => r.status === 201
    });
}