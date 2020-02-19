import React from 'react';
import PropTypes from 'prop-types';
import FieldModel from 'models/forms/FieldModel';
import './ActionButton.less';

const propTypes = {
    // Unique id for the containing form.
    formId: PropTypes.string.isRequired,

    // Model object that contains the field metadata.
    model: PropTypes.instanceOf(FieldModel).isRequired
};

/**
 * Button that fires off an action when pressed.
 *   It can be used as a Submit or Cancel button for the form.
 */
function ActionButton({ formId, model }) {
    //const fieldId = model.id;
    const { buttonLabel, isPrimary, isDisabled } = model;

    let otherClasses = '';
    otherClasses += (isPrimary) ? 'ff-primary' : 'ff-secondary';
    otherClasses += (isDisabled) ? 'ff-disabled' : '';

    if (!buttonLabel || buttonLabel.length === 0) {
        return null;
    }
    return (
        <div className={`ff-action-button ${otherClasses}`}>
            {buttonLabel}
        </div>
    );
}

ActionButton.propTypes = propTypes;

export default ActionButton;
