import React from 'react';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setFieldValue } from 'store/forms/FormActions';
import { selectFieldValue } from 'store/forms/FormSelectors';
import FieldModel from 'models/forms/FieldModel';

/**
 * Single line text-input for the user.
 */
function TextInput({ formId, model }) {
    const fieldId = model.id;
    const { isDisabled } = model;
    const dispatch = useDispatch();
    const value = useSelector(state => selectFieldValue(state, formId, fieldId, ''));

    function onChange(newValue) {
        dispatch(setFieldValue(formId, fieldId, newValue));
    }

    return (
        <div className="text-input" >
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
                disabled={(isDisabled) ? 'disabled' : undefined}
            />
        </div>
    );
}

// Component properties.
TextInput.propTypes = {
    formId: PropTypes.string.isRequired,
    model: PropTypes.instanceOf(FieldModel).isRequired
};

export default TextInput;
