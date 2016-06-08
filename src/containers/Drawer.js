import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Drawer extends Component {

  render() {
    return (
<div className="mdl-layout__drawer">
  <span className="mdl-layout-title">Menu</span>
  <nav className="mdl-navigation">
    <a className="mdl-navigation__link" href="#">Link</a>
    <a className="mdl-navigation__link" href="#">Link</a>
    <a className="mdl-navigation__link" href="#">Link</a>
    <a className="mdl-navigation__link" href="#">Link</a>
  </nav>
</div>
    )
  }
}

export default connect()(Drawer)
