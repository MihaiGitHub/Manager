import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// Async action creator to be called with an email and password
export const loginUser = ({ email, password }) => {
    // Action creator returning a function; Redux thunk calls this function
    // Manually dispatching action when the async request is complete and returning type and payload
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user })
        });
    };
};