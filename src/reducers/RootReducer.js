import { combineReducers } from 'redux';
import formReducer from './FormReducer';

/**
 * Combines the individual reducers into a single reducer function.
 */
const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;
