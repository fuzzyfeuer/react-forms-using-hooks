import React from 'react';
import Form from 'components/forms/Form';
import './App.less';

const App = () => {
    console.info('App starting --------->>');
    return (
        <div className="app-forms-using-hooks">
            <Form />
        </div>
    );
};

export default App;
