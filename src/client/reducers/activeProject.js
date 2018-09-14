import { FETCH_PROJECT, FETCH_INTENT, FETCH_ENTITY } from '../action/user.action';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PROJECT:
            return action.payload;
        case FETCH_INTENT:
            if (state != null) {
                return state.data.intents.concat(action.payload);
            }
        case FETCH_ENTITY:
            if (state != null) {
                return state.data.entities.concat(action.payload);
            }
    }
    return state;
}