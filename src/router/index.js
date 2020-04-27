import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../common/login.jsx'
import Register from '../common/register.jsx'
import Calendar from '../pages/me/calendar/calendar.jsx'
import Dog from '../pages/me/dog/dog.jsx'

import Home from '../home/home.jsx'

class RouterIndex extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/me/calendar' component={Calendar}></Route>
        <Route exact path='/me/dog' component={Dog}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Router>
    )
  }
}

export default RouterIndex
