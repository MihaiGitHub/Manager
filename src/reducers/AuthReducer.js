import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';
// State is declared in reducer
const INITIAL_STATE = { email: '', password: '', user: null, error: '' };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
        // make new object with existing state object and add an additional property of email
        // if state object already has an email property it will be overwritten with new one
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED: // Updating state with new password
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload }
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.' }
        default:
            return state;
    }
}