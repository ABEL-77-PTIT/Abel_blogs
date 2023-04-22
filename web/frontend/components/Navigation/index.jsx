import React from 'react'
import PropTypes from 'prop-types'
import LightDarkMode from '../LightDarkMode'

const Navigation = (props) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px- bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div>APT2</div>
          <div className="flex md:order-2">
            {/* Dark mode switcher */}
            <div>
              <LightDarkMode />
            </div>
            {/* Dark mode switcher end */}
          </div>
          <div
            className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navigation.propTypes = {}

export default Navigation
