import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {

  render() {
    return (
<footer className="mdl-mega-footer footer">
  <div className="mdl-mega-footer__middle-section">
    <div className="mdl-logo">{this.props.copyright}</div>
  </div>
</footer>
    )
  }
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired 
}

