import React from 'react'
import PropTypes from 'prop-types'
import LightDarkMode from '../LightDarkMode'

const Navigation = (props) => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 border-b-2">
      <div className="flex flex-wrap items-center justify-between">
        <div className="text-green-900 hover:text-te-light dark:text-te-dark m-2 font-bold text-[32px]">
          APT2
        </div>
        <div className="flex md:order-2">
          {/* Dark mode switcher */}
          <div>
            <LightDarkMode />
          </div>
          {/* Dark mode switcher end */}
        </div>
        <div className="text-te-light dark:text-te-dark md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="text-te-light dark:text-te-dark block pl-3 pr-4 py-2 md:p-0 rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-te-light dark:text-te-dark block pl-3 pr-4 py-2 md:p-0 rounded"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-te-light dark:text-te-dark block pl-3 pr-4 py-2 md:p-0 rounded"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-te-light dark:text-te-dark block pl-3 pr-4 py-2 md:p-0 rounded"
              >
                Channel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {}

export default Navigation
