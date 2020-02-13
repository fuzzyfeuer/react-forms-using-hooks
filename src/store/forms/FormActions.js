import * as Types from './FormTypes';

/** Action Creators */

// Use a 'payload' field as describe here, to adhere to Flux standard actions:
// https://redux-toolkit.js.org/api/createaction/

/**
 * Clears all fields (and any other flags/settings) in the form.
 */
export const resetForm = (formId) => ({
    type: Types.RESET_FORM,
    payload: {
        formId
    }
});

/**
 * Updates the value for an individual form field. The value can be of any datatype, such
 * as a string or array.
 */
export const setFieldValue = (formId, fieldId, value) => ({
    type: Types.SET_FIELD_VALUE,
    payload: {
        formId,
        fieldId,
        value
    }
});

/**
 * Indicates that the form is busy, typically when the Submit button has been pressed.
 */
export const setIsBusy = (formId, isBusy) => ({
    type: Types.SET_IS_BUSY,
    payload: {
        isBusy
    }
});
