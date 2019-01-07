import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            // Will have payload snapshot.val from employeeFetch action
            // Will send to app state in combineReducers as state.employees
            return action.payload;
        default:
            return state;
    }
};