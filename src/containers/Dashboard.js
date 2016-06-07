import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Dashboard extends Component {

  render() {
    return (
<main className="mdl-layout__content">
  <div className="mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">Boilerplate :: Dashboard</h2>
    </div>
  </div>
</main>
    )
  }
}

export default connect()(Dashboard)
