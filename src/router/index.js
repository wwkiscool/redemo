import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom';

import asyncComponent from '../utils/asyncComponent'
const ta = asyncComponent(()=> import('../pages/ta/ta'))
const you = asyncComponent(()=> import('../pages/you/you'))
const me = asyncComponent(()=> import('../pages/me/me'))
const home = asyncComponent(()=> import('../home/home'))

export default class RouterIndex extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/home' component={home} />
        <Route exact path='/me' component={me}></Route>
        <Route exact path='/ta' component={ta}></Route>
        <Route exact path='/you' component={you}></Route>
        <Redirect exact from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    )
  }
}
