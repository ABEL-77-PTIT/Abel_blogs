import React from 'react'
import PropTypes from 'prop-types'
import LightDarkMode from '../LightDarkMode'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const { primaryActions } = props

  return (
    <nav className="px-2 sm:px-4 py-2.5 border-b-2">
      <div className="flex flex-wrap items-center justify-between">
        <div className="text-green-900 hover:text-te-light dark:text-te-dark m-2 font-bold text-[32px]">
          <Link to="/">APT2</Link>
        </div>
        <div className="flex md:order-2">
          {/* Dark mode switcher */}
          <div>
            <LightDarkMode {...props} />
          </div>
          {/* Dark mode switcher end */}
        </div>
        <div className="text-te-light dark:text-te-dark md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {primaryActions?.length > 0 &&
              primaryActions.map((action) => (
                <li key={action.pathname}>
                  <Link to={action.pathname}>{action.label}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  primaryActions: PropTypes.array,
}

Navigation.defaultProps = {
  primaryActions: [],
}

export default Navigation
