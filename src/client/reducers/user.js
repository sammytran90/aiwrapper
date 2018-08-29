import { applicationAction } from '../action/index';

export default function (state = { userid: '', data: null }, action) {
    switch (action.type) {
        case applicationAction.LOGIN_SUCCESS:
            state.userid = action.payload.userid;
            state.data = action.payload.data;
        case applicationAction.LOGIN_FAILURE:
            state.data = action.payload.data;
    }
    return state;
}