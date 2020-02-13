
/**
 * The metadata configuration for a user input field.
 */
class FieldModel {
    /** Destructure a parsed JSON object with defaults. */
    constructor({ id, label, isMandatory=false, isDisabled=false }) {
        this.id = id;
        this.label = label;
        this.isMandatory = (isMandatory === true);
        this.isDisabled = (isDisabled === true);
    }
}

export default FieldModel;
