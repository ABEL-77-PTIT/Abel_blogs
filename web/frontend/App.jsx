import React from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.jsx'
import Navigation from './components/Navigation/index.jsx'
import Footer from './components/Footer/index.jsx'

const App = (props) => {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  let primaryActions = [
    {
      label: 'Home',
      pathname: '/',
    },
    {
      label: 'About Me',
      pathname: '/about-me',
    },
    {
      label: 'Blogs',
      pathname: '/blogs',
    },
    {
      label: 'Youtube Feed',
      pathname: '/youtube-feed',
    },
    // {
    //   label: 'Submit',
    //   pathname: '/submit',
    // },
  ]

  return (
    <div className="container mx-auto">
      <Navigation {...props} primaryActions={primaryActions} />
      <Routes pages={pages} appProps={props} />
      <div style={{ position: 'absolute', bottom: '0px', left: '0px', right: '0px' }}>
        <Footer />
      </div>
    </div>
  )
}

App.propTypes = {}

export default App
