import React from 'react';
import PropTypes from 'prop-types';
import FieldModel from 'models/forms/FieldModel';
import './FieldLabel.less';

const propTypes = {
    // Model object that provides the field configuration.
    model: PropTypes.instanceOf(FieldModel).isRequired
};

/**
 * Label for a user input field.
 */
function FieldLabel({ model }) {
    const { label, isMandatory } = model;

    if (!label || label.length === 0) {
        return null;
    }
    return (
        <div className="ff-field-label" >
            {label}
            {(isMandatory) && (
                <span className="ff-field-mandatory">*</span>
            )}
        </div>
    );
}

FieldLabel.propTypes = propTypes;

export default FieldLabel;
