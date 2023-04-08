import React from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.jsx'

const App = (props) => {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  return <Routes pages={pages} appProps={props} />
}

App.propTypes = {}

export default App
