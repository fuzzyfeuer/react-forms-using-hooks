import React from 'react';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setFieldValue } from 'actions/FormActions';
import FieldModel from 'models/forms/FieldModel';

function getFieldValue(formId, fieldId, { form }) {
    if (form.formStates && form.formStates[formId]) {
        if (form.formStates[formId][fieldId]) {
            return form.formStates[formId][fieldId];
        }
    }
    return '';
}

/**
 * Single line text-input for the user.
 */
function TextInput({ formId, model }) {
    const dispatch = useDispatch();
    const { isDisabled } = model;
    const fieldId = model.id;
    // const [ value, setValue ] = useState('');
    const value = useSelector((state) => getFieldValue(formId, fieldId, state));

    function onChange(newValue) {
        // setValue(newValue);
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
