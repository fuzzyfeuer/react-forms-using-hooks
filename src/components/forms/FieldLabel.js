import React from 'react';
import PropTypes from 'prop-types';
import FieldModel from 'models/forms/FieldModel';
import './FieldLabel.less';

/**
 * Label for an input field.
 */
function FieldLabel({ model }) {
    const { label, tooltip, isMandatory } = model;

    if (!label) {
        return null;
    }
    return (
        <div className="fieldLabel" title={tooltip} >
            {label}
            {(isMandatory) && (
                <span className="fieldMandatory">*</span>
            )}
        </div>
    );
}

// Component properties.
FieldLabel.propTypes = {
    model: PropTypes.instanceOf(FieldModel).isRequired
};

export default FieldLabel;
