import React, { Component, PropTypes } from 'react'

export default class LoginForm extends Component {

  render() {
    return (
<div className="mdl-card mdl-shadow--2dp">

  <div className="mdl-card__title">
    <h2 clssName="mdl-card__title-text">Boilerplate :: Login</h2>
  </div>

  <div className="mdl-card__supporting-text mdl-card-border">
    <p>Input your account information</p> 
  </div>

  
  <div className="mdl-card__supporting-text mdl-card--border">
   
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text" id="username" name="username" />
      <label className="mdl-textfield__label" htmlFor="username" name="password">Username</label>
    </div>

    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="password" id="password" name="password" />
      <label className="mdl-textfield__label" htmlFor="password">Password</label>
    </div>

  </div>

  <div className="mdl-card__actions mdl-card--border">
    <button type="submit" className="mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect">Login</button>
  </div>

</div>
    )
  }
}

