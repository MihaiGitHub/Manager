import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS
} from './types';
import console = require('console');

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

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // By creating a ref, we can work with the data at the path
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        // Event handler that calls fat arrow function every time it comes across new data; autoupdate list
            .on('value', snapshot => { // snapshot is an object that describes what data is in path
                // Send list of employees to reducer so that it can update the state from where the
                // component will take the employees and render them
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => console.log('saved'));
    }
}