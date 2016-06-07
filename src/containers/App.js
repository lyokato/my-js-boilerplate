import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'

@connect(
  state => {
    return {
      auth: state.auth
    }
  }
)
export default class App extends Component {
  render() {
    return (
      <div className="mld-layout">
        <Header title="MyApp" />
        <main className="mdl-layout__content">
          <LoginForm />
        </main>
        <Footer copyright="MyApp" />
      </div>
    )
  }
}