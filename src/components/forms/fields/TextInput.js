import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setFieldValue } from 'store/forms/FormActions';
import { selectFieldValue } from 'store/forms/FormSelectors';
import FieldModel from 'models/forms/FieldModel';

import './TextInput.less';

const propTypes = {
    // Unique id for the containing form.
    formId: PropTypes.string.isRequired,

    // Model object that contains the field metadata.
    model: PropTypes.instanceOf(FieldModel).isRequired
};

/**
 * Field for entering a single line of text.
 */
function TextInput({ formId, model }) {
    const fieldId = model.id;
    const { isDisabled } = model;
    const dispatch = useDispatch();
    const value = useSelector(state => selectFieldValue(state, formId, fieldId, ''));

    const onChange = useCallback(e => {
        const newValue = e.currentTarget.value;
        dispatch(setFieldValue(formId, fieldId, newValue));
    }, []);

    return (
        <div className="ff-text-input" >
            <input
                type="text"
                value={value}
                onChange={onChange}
                disabled={(isDisabled) ? 'disabled' : undefined}
            />
        </div>
    );
}

TextInput.propTypes = propTypes;

export default TextInput;
