import React from 'react';
import FieldModel from 'models/forms/FieldModel';
import FieldLabel from './FieldLabel';

/**
 * Form that contains various input fields.
 */
function Form() {

    const fieldModel = new FieldModel({
        label: 'Hello 2',
        tooltip: 'This is a tooltip!',
        isMandatory: true
    });

    return (
        <div className="ff-form">
            <FieldLabel model={fieldModel} />
        </div>
    );
}

export default Form;
