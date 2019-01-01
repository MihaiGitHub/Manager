import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';
// State is declared in reducer
const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default(state = INITIAL_STATE, action) => {
    // Handle all authentication related actions in this reducer
    switch(action.type){
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case EMAIL_CHANGED:
        // make new object with existing state object and add an additional property of email
        // if state object already has an email property it will be overwritten with new one
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED: // Updating state with new password
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
        // Takes original state, resets with initial state then on top adds the user model
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false }
        default:
            return state;
    }
}