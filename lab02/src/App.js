import React, { Component } from 'react'

import './components/Components.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className='app-container'>
        <Main/>
      </div>
      <Footer/>
      </>
    )
  }
}

