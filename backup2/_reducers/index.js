import {combineReducers} from 'redux';
import AlertReducer from './alert.reducer';
import AuthenticationReducer from './authentication.reducer';
import RegistrationReducer from './registration.reducer';
import UsersReducer from './users.reducer';

const rootReducer = combineReducers({
    users: UsersReducer,
    alert: AlertReducer,
    Authentication: AuthenticationReducer,
    Registration: RegistrationReducer,
})

export default rootReducer;