import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router}  from 'react-router-dom';
import LabView from './components/lapView'
import App from './App'
import ReactRouter from './components/Routing/router';

ReactDOM.render(<LabView/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();