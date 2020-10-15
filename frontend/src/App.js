import React, { Component } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Aside from './Component/Aside/Aside'
import User from './Component/User/user'
class App extends Component{
  render() {
    return (
      <div className='App'>
        <div>
          <Header/>
          <div className='HeroBanner'>
              <div id='Aside'>
                <Aside/>
              </div>
              <div id='User'>
                <User/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
