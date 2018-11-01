import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {store} from './store/store';
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Header />
            <Dashboard/>
        </React.Fragment>
    </Provider>
    ,document.getElementById('root'));