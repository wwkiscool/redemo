import React from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from '../common/login.jsx'

class RouterIndex extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login}/>
      </Router>
    )
  }
}

export default RouterIndex
