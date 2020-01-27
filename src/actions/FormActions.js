import * as Types from './FormTypes';

/** Action Creators */

/**
 * Updates the value for a specific form field. The value can be of any datatype, such
 * as a string or array.
 */
export const setFieldValue = (formId, fieldId, value) => (
    {
        type: Types.SET_FIELD_VALUE,
        formId,
        fieldId,
        value
    }
);
