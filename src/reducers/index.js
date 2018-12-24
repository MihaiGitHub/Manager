import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    // The auth piece of state is produced by the AuthReducer
    auth: AuthReducer
});