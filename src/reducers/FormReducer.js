import * as Types from 'actions/FormTypes';

const initialState = {
    formStates: {}
};

/**
 * Reducer that applies the action to the application state.
 */
function formReducer(state = initialState, action) {
    console.debug(`formReducer: ${action.type}`);

    switch (action.type) {
    case Types.SET_FIELD_VALUE:
        const { formId, fieldId, value } = action;

        return {
            ...state,
            formStates: {
                ...state.formStates,
                [formId]: {
                    ...state.formStates[formId],
                    [fieldId]: value
                }
            }
        };

    default:
        return state;
    }
}

export default formReducer;
