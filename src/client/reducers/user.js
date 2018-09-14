import { CREATE_PROJECT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/user.action';

export default function (state = null, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGIN_FAILURE:

        case CREATE_PROJECT:
            if (state != null) {
                var projectsArr = state.data.projects;
                state.data.projects = projectsArr.concat([{
                    project_name: action.payload,
                    intents: [],
                    entities: []
                }])
                return state;
            }
    }
    return state;
}