import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { fetchConfig, fetchContent } from './redux/actions/configAction';
import './assets/css/app.scss';

Promise.all([
    store.dispatch(fetchConfig()),
    store.dispatch(fetchContent()),
]).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
});
