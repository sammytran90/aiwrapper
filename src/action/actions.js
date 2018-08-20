import axios from 'axios';

export function login(value, callback){
    const request = axios.post('/login',values)
    .then((res) =>{
        if(callback){
            callback(res);
        }
        // if()
    })
}