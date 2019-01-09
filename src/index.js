import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(
    reducers
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);