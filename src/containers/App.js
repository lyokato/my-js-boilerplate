import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import Drawer from './Drawer'

class App extends Component {

  render() {

    let content = <LoginForm />
    let layoutClass = "mdl-layout mdl-layout--fixed-header"
    let drawer = null

    if (this.props.loggedIn) {
      drawer = <Drawer />
      content = <Dashboard />
      layoutClass = "mdl-layout mdl-layout--fixed-header mdl-layout--fixed-drawer"
    }

    return (
      <div className={layoutClass}>
        <Header title="Boilerplate" />
        {drawer}
        {content}
        <Footer copyright="Boilerplate" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps)(App)
