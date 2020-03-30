import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/css/global.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

// import('vconsole').then(vconsole => {
//   // eslint-disable-next-line new-cap,no-new
//   new vconsole.default();
// })

ReactDOM.render(<App />, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
   