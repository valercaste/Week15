import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from "./app";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();