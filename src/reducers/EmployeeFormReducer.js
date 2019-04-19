import {
    EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMPLOYEE_UPDATE:
        // action.payload === { prop: 'name', value: 'jane' }
        // [] = key interpolation
        // The key added to the object will be determined at runtime
        // It could return: name: Jane or shift: Monday
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_CREATE:
            return INITIAL_STATE; // Reset form after creating an employee
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE; // Reset form after saving/updating an employee
        default:
            return state;
    }
}