import { combineReducers } from 'redux';
import users from './user';

const rootReducer = combineReducers({
    user: users
})

export default rootReducer;