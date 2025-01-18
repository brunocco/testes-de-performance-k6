import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '60s',
  }

export default function(){
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(BASE_URL);

    sleep(1);
}

/*Geração de Deshboard
#Gerar direto no navegador é necessário introduzir um flag no CLI:

k6_WEB_DESHBOARD=true k6 run 2-deshboard.js

acessar o https://localhost:5665/ui/?endpoint=/ para verificar em tempo real sendo construido

#gerar como arquivo html dentro da pasta k6:

K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=relatorio.html k6 run 2-dashboard.js



*/