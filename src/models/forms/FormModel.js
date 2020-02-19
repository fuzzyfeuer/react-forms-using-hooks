import FieldModel from './FieldModel';

/**
 * Configuration for a form, consisting of various input components.
 */
class FormModel {
    /** Takes a parsed JSON object. */
    constructor({ className, id, fields }) {
        const expectedName = this.constructor.name.replace('Model', '');
        if (className !== expectedName) {
            throw Error(`Invalid className '${className}', expected '${expectedName}'.`);
        }
        this.id = id;
        this.fields = fields.map(field => new FieldModel(field));
    }
}

export default FormModel;
