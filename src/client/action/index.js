import axios from 'axios';
import { dispatch } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';



export function login(value) {
    return {
        type: LOGIN_SUCCESS,
        payload: value
    }
    // return axios.post('/login', value)
    //     .then(res => {
    //         console.log(res);
    //         if (res.status == 200 && res.data) {
    //             return {
    //                 type: LOGIN_SUCCESS,
    //                 payload: res
    //             }
    //         } else {
    //             return {
    //                 type: LOGIN_FAILURE,
    //                 payload: res
    //             }
    //         }
    //     })



}

export function loginDispatch(data) {
    console.log("test4");
    return {
        type: applicationAction.LOGIN_SUCCESS,
        payload: data
    }
}
