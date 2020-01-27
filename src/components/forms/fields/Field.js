import React from 'react';
import PropTypes from 'prop-types';
import FieldModel from 'models/forms/FieldModel';
import FieldLabel from './FieldLabel';
import TextInput from './TextInput';

/**
 * Container for all user input fields.
 */
function Field({ formId, model }) {
    const fieldId = model.id;

    return (
        <div className="field"
            data-field-id={fieldId} >

            <FieldLabel model={model} />

            {(model instanceof FieldModel) && (
                <TextInput
                    formId={formId}
                    model={model} />
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
