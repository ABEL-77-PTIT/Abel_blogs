import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const AppContainer = (props) => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

AppContainer.propTypes = {}

export default AppContainer
