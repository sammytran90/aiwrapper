import { combineReducers } from 'redux';
import users from './user';
import applicationMode from './applicationMode';
import menu from './menu';
import activeProject from './activeProject';

const rootReducer = combineReducers({
    user: users,
    applicationMode: applicationMode,
    menu: menu,
    activeProject: activeProject
})

export default rootReducer;