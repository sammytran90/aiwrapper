import axios from 'axios';
import { dispatch } from 'redux';

export const applicationAction = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
}

export function login(value, callback) {
    return function action(dispatch) {
        dispatch({ type: applicationAction.LOGIN_SUCCESS })
    }
    
    var request = axios.post('/login', value);

    return request.then((response) => {
        callback(response);
        if (response.status == 200 && response.data) {
            dispatch({
                type: applicationAction.LOGIN_SUCCESS,
                payload: response
            })
        } else {
            dispatch({
                type: applicationAction.LOGIN_FAILURE,
                payload: response
            })
        }
    })
}