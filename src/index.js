import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import './common/css/base.scss'
import Route from './router';
import store from './store'
import * as serviceWorker from './serviceWorker';

// import('vconsole').then(vconsole => {
//   // eslint-disable-next-line new-cap,no-new
//   new vconsole.default();
// })

const render = Component =>{
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
   