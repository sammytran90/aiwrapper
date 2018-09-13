import axios from 'axios';
import { dispatch } from 'redux';

// import { put, takeEvery, all, call } from 'redux-saga/effects'

// application access actions
export const GET_USER = 'GET_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// user data manipulation
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_INTENT = 'FETCH_INTENT';
export const FETCH_ENTITY = 'FETCH_ENTITY';


export function getUser(value, callback) {
    return (dispatch, getState) => {
        dispatch({ type: GET_USER });

        axios.post('/login', value)
            .then(response => {
                if (callback) callback(response);
                if (response.status == 200 && response.data) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: response
                    })
                } else {
                    dispatch({
                        type: LOGIN_FAILURE
                    })
                }
            }
            )
    }
}

export function dispatch_msg(msg) {
    return function (dispatch) {
        dispatch(msg)
    }
}