import { combineReducers } from 'redux';
import users from './user';
import applicationMode from './applicationMode';
import menu from './menu';

const rootReducer = combineReducers({
    user: users,
    applicationMode: applicationMode,
    menu: menu
})

export default rootReducer;