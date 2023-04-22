import React from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.jsx'
import Navigation from './components/Navigation/index.jsx'

const App = (props) => {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  return (
    <div>
      <Navigation />

      <Routes pages={pages} appProps={props} />
    </div>
  )
}

App.propTypes = {}

export default App
