import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import { reduxStore } from 'store/ReduxStore';
import './index.css';

ReactDOM.render(
    <Provider store={reduxStore} >
        <App />
    </Provider>,
    document.getElementById('app-react-root')
);
