import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
        // make new object with existing state object and add an additional property of email
        // if state object already has an email property it will be overwritten with new one
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED: // Updating state with new password
            return { ...state, password: action.payload }
        default:
            return state;
    }
}