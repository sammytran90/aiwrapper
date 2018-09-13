import { FETCH_PROJECT, FETCH_INTENT, FETCH_ENTITY, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/user.action';

export default function (state = null, action) {
    console.log("test reducer");
    switch (action.type) {
        //application access
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILURE:

        //application data interaction
        case FETCH_PROJECT:
            if (state != null) {
                return state.data.projects.concat([{
                    project_name: action.payload,
                    intents: [],
                    entities: []
                }])
            }
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