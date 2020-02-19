
/**
 * Configuration for a single input field.
 */
class FieldModel {
    /** Takes a parsed JSON object with defaults. */
    constructor({ className, id, label, buttonLabel, isMandatory=false, isDisabled=false }) {
        this.className = className;
        this.id = id;
        this.label = label;
        this.buttonLabel = buttonLabel;
        this.isMandatory = (isMandatory === true);
        this.isDisabled = (isDisabled === true);
    }
}

export default FieldModel;
