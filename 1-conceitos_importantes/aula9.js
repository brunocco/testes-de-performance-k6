import http from 'k6/http';
import { sleep } from 'k6';


export default function(){

    const res = http.get(__ENV.URL);

    sleep(1);
}

//Podemos usar variaveis de ambiente direto na CLI no terminal ao invez de usar no options para determinar a url, duration, vus etc