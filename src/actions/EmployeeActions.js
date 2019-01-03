import {
    EMPLOYEE_CREATE
} from './types';

// One action creator that can update any different prop that exists inside the form
export const employeeCreate = ({ prop, value }) => {
    console.log('in action employee create')
    return {
        type: EMPLOYEE_CREATE,
        payload: { prop, value }
    }
}