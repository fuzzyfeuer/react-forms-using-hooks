import { createReducer } from '@reduxjs/toolkit';
import * as Types from './FormTypes';

/**
 * Reducer: Updates the application state by applying an action.
 *   This reducer stores any values that are input by the user into a form.
 */

const initialState = {
    formsById: {}
};

const initFormState = (state, formId, fieldId) => {
    // initialize the form
    if (!state.formsById[formId]) {
        state.formsById[formId] = {
            fieldsById: {},
            isBusy: false
        };
    }
    // initialize field
    if (typeof fieldId !== 'undefined') {
        if (!state.formsById[formId].fieldsById[fieldId]) {
            state.formsById[formId].fieldsById[fieldId] = {};
        }
    }
};

/* State Update Methods */

const resetForm = (state, formId) => {
    state.formsById[formId] = undefined;
    initFormState(state, formId);
};

const setFieldProperty = (state, formId, fieldId, keyValues) => {
    initFormState(state, formId, fieldId);
    Object.assign(state.formsById[formId].fieldsById[fieldId], keyValues);
};

const setIsBusy = (state, formId, isBusy) => {
    initFormState(state, formId);
    state.formsById[formId].isBusy = isBusy;
};

/* Reducers */

/**
 * This uses React Toolkit (the 'createReducer' method), which underneath uses the 'immer'
 * module to allow direct modification/mutation of the state.
 *
 * https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
 * #simplifying-immutable-updates-with-redux-toolkit
 */
const caseReducers = {
    [Types.RESET_FORM]: (state, action) => {
        const { formId } = action.payload;
        resetForm(state, formId);
    },

    [Types.SET_FIELD_VALUE]: (state, action) => {
        const { formId, fieldId, value } = action.payload;
        setFieldProperty(state, formId, fieldId, { value });
    },

    [Types.SET_IS_BUSY]: (state, action) => {
        const { formId, isBusy } = action.payload;
        setIsBusy(state, formId, isBusy);
    }
};

export const formReducer = createReducer(initialState, caseReducers);
