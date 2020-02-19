import React from 'react';
import PropTypes from 'prop-types';

import FieldModel from 'models/forms/FieldModel';
import ActionButton from './ActionButton';
import FieldLabel from './FieldLabel';
import TextInput from './TextInput';
import './Field.less';

/**
 * Container for all user input fields.
 */
function Field({ formId, model }) {
    const fieldId = model.id;
    console.warn(`#### model.className=${model.className}`);

    if (!(model instanceof FieldModel)) {
        return null;
    }
    return (
        <div className="ff-field" data-field-id={fieldId} >
            <FieldLabel model={model} />

            {(model.className === 'TextInput') ? (
                <TextInput
                    formId={formId}
                    model={model} />
            ) : (model.className === 'ActionButton') ? (
                <ActionButton
                    formId={formId}
                    model={model} />
            ) : (
                <div>Unknown Field</div>
            )}
        </div>
    );
}

// Component properties.
Field.propTypes = {
    formId: PropTypes.string.isRequired,
    model: PropTypes.instanceOf(FieldModel).isRequired
};

export default Field;
