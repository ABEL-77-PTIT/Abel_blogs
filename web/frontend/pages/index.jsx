import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  console.log('props =>>', props)
  return (
    <div className="flex flex-col text-te-light dark:text-te-dark pt-[10%] mx-40">
      <div className="flex space-x-10">
        <div className="mb-10">
          <h1 className="text-[32px] mb-6">Chào mừng bạn đến với trang web của Abel</h1>
          <p>
            Nơi chia sẽ vài điều tôi yêu thích về cuộc sống. Một vài điều tôi học được và muốn chia
            sẽ tới mọi người.
          </p>
        </div>
        <div>APT2</div>
      </div>
      <div>
        <h1 className="text-[20px] mb-4">Có gì ở đây?</h1>
        <div className="grid gap-y-6">
          <div className="flex justify-between p-6 bg-bg-dark dark:bg-bg-light border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <div>
              <h5 className="mb-2 text-[24px] font-bold tracking-tight text-gray-900 dark:text-te-light">
                Blogs
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
            <Link
              to="/blogs"
              type="button"
              className="flex flex-row items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Đi thôi
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="flex justify-between p-6 bg-bg-dark dark:bg-bg-light border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <div>
              <h5 className="mb-2 text-[24px] font-bold tracking-tight text-gray-900 dark:text-te-light">
                Youtube Feed
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
              </p>
            </div>
            <Link
              to="/youtube-feed"
              type="button"
              className="flex flex-row items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Đi thôi
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
