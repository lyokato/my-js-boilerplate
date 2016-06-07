import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'

class LoginForm extends Component {

  handleClick(e) {
    let username = findDOMNode(this.refs.username).value.trim()
    let passwprd = findDOMNode(this.refs.password).value.trim()
    this.props.login(username, password)
    e.preventDefault()
  }

  render() {
    return (
<div className="mdl-card mdl-shadow--2dp">

  <div className="mdl-card__title">
    <h2 className="mdl-card__title-text">Boilerplate :: Login</h2>
  </div>

  <div className="mdl-card__supporting-text mdl-card-border">
    Input your account information
  </div>

  
  <div className="mdl-card__supporting-text mdl-card--border">
   
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" id="username" name="username" ref="username" />
      <label className="mdl-textfield__label" htmlFor="username" name="password">Username</label>
    </div>

    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="password" id="password" name="password" ref="password"/>
      <label className="mdl-textfield__label" htmlFor="password">Password</label>
    </div>

  </div>

  <div className="mdl-card__actions mdl-card--border">
    <button type="submit" className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect" onClick={this.handleClick.bind(this)}>Submit</button>
  </div>

</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { 
    ...bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
