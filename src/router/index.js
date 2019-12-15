import React from 'react';
// import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import Login from '../common/login.jsx'
import Register from '../common/register.jsx'
import Calendar from '../pages/me/calendar/calendar.jsx'

class RouterIndex extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/me/calendar' component={Calendar}></Route>
      </Router>
    )
  }
}

export default RouterIndex
