import React, { Component } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class DIYHeader extends Component {
  static propTypes = {
    title: this.propTypes.string.isRequired,
    signUp: PropTypes.bool,
    goBack: PropTypes.func,
    goHome: PropTypes.func,
    edit: PropTypes.func,
    userInfo: PropTypes.object.isRequired
  }
  state = {
    headTitle: '首页'
  }

  render() {
    return (
      <header className='header-container'>
        123
      </header>
    )
  }
}