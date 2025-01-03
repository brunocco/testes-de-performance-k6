import http from 'k6/http';

export const options = {
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      duration: '30s',
      rate: 30,
      timeUnit: '1s',
      preAllocatedVUs: 50,
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
}

//Número fixo de interações inciadas pelo k6
//Novas interações iniciadas enquanto houver vus disponiveis
//Novas interações seguindo sempre a taxa cnfigurada