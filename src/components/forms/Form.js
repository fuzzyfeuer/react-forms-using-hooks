import React from 'react';
import FieldModel from 'models/forms/FieldModel';
import Field from './fields/Field';

/**
 * Form that contains various input fields.
 */
function Form() {
    const formId = 'formId';

    const fieldModel = new FieldModel({
        label: 'Hello 2',
        isMandatory: true
    });

    return (
        <div className="form"
            data-form-id={formId} >

            <Field
                formId={formId}
                model={fieldModel} />
        </div>
    );
}

export default Form;
