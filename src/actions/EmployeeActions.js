import {
    EMPLOYEE_UPDATE
} from './types';

// One action creator that can update any different prop that exists inside the form
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

