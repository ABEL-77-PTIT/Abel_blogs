import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LoadingPage from './components/LoadingPage'

const AppContainer = (props) => {
  const { appLoading } = props
  return (
    <div className="bg-bg-light dark:bg-bg-dark font-secondary w-screen h-screen">
      <BrowserRouter>
        <App {...props} />

        {appLoading?.loading && <LoadingPage {...appLoading} />}
      </BrowserRouter>
    </div>
  )
}

AppContainer.propTypes = {}

export default AppContainer
