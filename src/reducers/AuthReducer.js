import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
        // make new object with existing state object and add an additional property of email
        // if state object already has an email property it will be overwritten with new one
            return { ...state, email: action.payload }
        default:
            return state;
    }
}