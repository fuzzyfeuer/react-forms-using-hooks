import React from 'react';
import FormModel from 'models/forms/FormModel';
import Field from './fields/Field';
import formConfig from './form-config.json';
import './Form.less';

/**
 * Form consists of one or more user input fields.
 *   The current state (i.e., the values) are maintained in the Redux store. The layout
 * is configurable in JSON, and passed as a Model object.
 */
function Form() {

    console.info(`+++++++++ formConfig: ${typeof formConfig}`);
    const formModel = new FormModel(formConfig[0]);
    const formId = formModel.id;

    return (
        <div className="ff-form"
            data-form-id={formId} >

            <Field
                formId={formId}
                model={formModel.fields[0]} />
            <Field
                formId={formId}
                model={formModel.fields[1]} />
        </div>
    );
}

export default Form;
