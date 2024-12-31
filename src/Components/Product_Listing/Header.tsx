import React from 'react'

const Header = () => {
  return (
    <>
    <div className=" py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl  lg:grid-cols-2 gap-8">
      <div className="flex mt-36 flex-col justify-center">
      <h1 className="text-4xl text-center  font-bold tracking-tight text-gray-900 sm:text-5xl">
      New Arrivals
      </h1>
      <p className="mt-4 text-center text-lg text-gray-400">
      Thoughtfully designed objects for the workspace, home, and travel.
      </p>
    </div>
      </div>
    </div>
    </>
  )
}

export default Header
