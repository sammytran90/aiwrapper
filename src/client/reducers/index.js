import { combineReducers } from 'redux';
import users from './user';
import applicationMode from './applicationMode';

const rootReducer = combineReducers({
    user: users,
    applicationMode: applicationMode
})

export default rootReducer;