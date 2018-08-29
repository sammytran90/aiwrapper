import axios from 'axios';
import { dispatch } from 'redux';

export const applicationAction = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
}

export function login(value) {
    axios.post('/login', value)
        .then((response) => {
            if (response.status == 200 && response.data) {
                dispatch({
                    type: applicationAction.LOGIN_SUCCESS,
                    payload: response.data
                })
            } else {
                dispatch({
                    type: applicationAction.LOGIN_FAILURE,
                    payload: response.data
                })
            }
        })
}