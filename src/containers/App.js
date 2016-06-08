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
    let drawer = null

    if (this.props.loggedIn) {
      drawer = <Drawer />
      content = <Dashboard />
    }

    return (
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <Header title="Boilerplate" />
    {drawer}
    <main className="mdl-layout__content">
      {content}
    </main>
  <Footer copyright="Boilerplate" />
</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(App)
