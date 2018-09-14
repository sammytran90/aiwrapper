import { CHANGE_MODE } from '../action/app.action';

export const loginMode = 'LOGIN_MODE';
export const projectMode = 'PROJECT_MODE';
export const intentMode = 'INTENT_MODE';
export const entitiesMode = 'ENTITIES_MODE';

export default function (state = loginMode, action) {
    switch (action.type) {
        case CHANGE_MODE:
            return action.payload;
    }
    return state;
}