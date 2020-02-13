import { combineReducers } from 'redux';
import { formReducer } from './forms/FormReducer';

/**
 * Combines the individual reducers into a single reducer function.
 */
export const rootReducer = combineReducers({
    form: formReducer
});
