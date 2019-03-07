import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import Map from './components/Map'
import DevList from './components/DevList'
import Modal from './components/Modal'

import { ToastContainer } from 'react-toastify'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ToastContainer />
        <div>
          <Map />
          <DevList />
          <Modal />
        </div>
      </Provider>
    )
  }
}

export default App
