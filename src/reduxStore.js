import { createStore } from 'redux';
import rootReducer from 'reducers/RootReducer';

/**
 * The Redux store that holds the complete state tree for the app.
 */
const reduxStore = createStore(rootReducer);

export default reduxStore;
