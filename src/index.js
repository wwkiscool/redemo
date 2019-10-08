import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { Input, Select,Reservation} from './pages/me/formdemo'
import Message from './pages/me/message.jsx'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Input />, document.getElementById('root'));
ReactDOM.render(<Message />, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
