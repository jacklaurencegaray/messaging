import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './Routes/AppRoute.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
