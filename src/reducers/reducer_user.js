import { GET_USER, GET_USER_FAILURE, LOGOUT_SUCCESS } from '../actions';

export default function userReducer(state = null, action) {
    switch(action.type) {
        case GET_USER:
            return action.payload;
        case GET_USER_FAILURE:
        case LOGOUT_SUCCESS:
            return null;
    }
    return state;
}