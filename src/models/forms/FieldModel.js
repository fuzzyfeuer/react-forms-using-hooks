
/**
 * The metadata configuration for a user input field.
 */
class FieldModel {
    /** Destructure a parsed JSON object with defaults. */
    constructor({ label, tooltip, isMandatory=false }) {
        this.label = label;
        this.tooltip = tooltip;
        this.isMandatory = isMandatory;
    }
}

export default FieldModel;
