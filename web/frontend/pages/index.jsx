import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  console.log('props =>>', props)
  const renderCard = [
    {
      url: '/blogs',
      name: 'Blogs',
      content: 'Nơi chia sẽ một vài điều hay ho mà tôi thấy được, học được trong cuộc sống.',
    },
    {
      url: '/youtube-feed',
      name: 'Youtube Feed',
      content: 'Nơi chia sẽ một vài điều hay ho mà tôi thấy được, học được trong cuộc sống.',
    },
  ]

  return (
    <div className="flex flex-col text-te-light dark:text-te-dark pt-[10%] md:mx-5 lg:mx-40">
      <div className="flex flex-col sm:flex-row space-x-10 justify-between">
        <div className="mb-12">
          <h1 className="text-[32px] mb-4">Chào mừng bạn đến với trang web của Abel</h1>
          <p>Learn follow and master rules, then break it.</p>
        </div>
        <div className="mx-auto text-center text-[30px]">APT2</div>
      </div>
      <div>
        <h1 className="text-[20px] mb-4">Có gì ở đây?</h1>
        <div className="grid gap-y-6">
          {renderCard.map((card) => (
            <div
              key={card.url}
              className="flex flex-col sm:flex-row justify-between items-center p-6 bg-bg-dark dark:bg-bg-light border border-gray-200 rounded-lg shadow dark:border-gray-700"
            >
              <div>
                <h5 className="mb-2 text-[24px] font-bold tracking-tight  text-te-dark dark:text-te-light">
                  {card.name}
                </h5>
                <p className="mb-3 font-normal text-bermuda dark:text-tahiti">{card.content}</p>
              </div>
              <button
                onClick={() => props.navigate(`${card.url}`)}
                className="flex flex-row items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 mr-2 mb-2 h-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Đi thôi
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1 hidden md:block"
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
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
