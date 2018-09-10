import { GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/user.action';

export default function (state = null, action) {
    console.log("test reducer");
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log("succeed");
            return action.payload;
        case LOGIN_FAILURE:
            console.log('test');
    }
    return state;
}