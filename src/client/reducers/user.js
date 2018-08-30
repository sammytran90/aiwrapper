import { applicationAction } from '../action/index';

export default function (state = null, action) {
    switch (action.type) {
        case applicationAction.LOGIN_SUCCESS:
            return action.payload;
        // state.data = action.payload.data;
        case applicationAction.LOGIN_FAILURE:
            return null;
    }
    return state;
}