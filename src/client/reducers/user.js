import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/index';

export default function (state = null, action) {
    console.log("test reducer");
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        // state.data = action.payload.data;
        case LOGIN_FAILURE:
            return null;
    }
    return state;
}