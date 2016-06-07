import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

  render() {
    return (
<header className="mdl-layout__header">     
  <div className="mdl-layout__header-row">
    <span className="mdl-layout-title">{this.props.title}</span>
  </div>
</header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired 
}
