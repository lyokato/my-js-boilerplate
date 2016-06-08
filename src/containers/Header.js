import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/login'

class Header extends Component {

  handleLogoutClick(e) {
    this.props.logout()
    e.preventDefault()
  }

  handleSignupClick(e) {
    this.props.logout()
    e.preventDefault()
  }

  render() {
    return (
<header className="mdl-layout__header">     
  <div className="mdl-layout__header-row">
    <span className="mdl-layout-title">{this.props.title}</span>
    <div className="mdl-layout-spacer"></div>
    {(() => {
      if (this.props.loggedIn) {
        return <div>
          <span>{this.props.username}</span>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.handleLogoutClick.bind(this)}>
             Logout
          </button>
          </div>
      } else {
        return <div>
          <span>Guest</span>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.handleSignupClick.bind(this)}>
            Sign Up 
          </button>
          </div>
      }
    })()}
  </div>
</header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired 
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    username: state.auth.username
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    ...bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
