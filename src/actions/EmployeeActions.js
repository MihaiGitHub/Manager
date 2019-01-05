import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE, EMPLOYEE_CREATE
} from './types';

// One action creator that can update any different prop that exists inside the form
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    // Get access to currently authenticated user
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // Get access to db and make reference '/users/userId/employees' (path to JSON data store)
        // Then push (save) user data
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' }); // redirect to employee list; no back btn
            });
    }
}