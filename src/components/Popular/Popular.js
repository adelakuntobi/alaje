import React from 'react'
import Popularsample from './Popularsample'


function Popular() {
  return (
    <div className="blue-bg md:p-12 px-0 py-8 w-full">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="green-text text-2xl font-semibold leading-snug my-2">Popular Categories</h1>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center mt-8 mb-5">
            <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Laptops</li>
            <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Phones & Tablets</li>
            <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Accessories</li>
            <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Gadgets</li>
          </ul>
        </div>

        <div className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
          <Popularsample productname="Samsung Galaxy M11"/>
          <Popularsample productname="Infinix Hot 6"/>
          <Popularsample productname="iPhone X"/>
          <Popularsample productname="Galaxy Note 4"/>
          <Popularsample productname="Tecno Spark 4"/>
          <Popularsample productname="Nokia 4"/>
          <Popularsample productname="Galaxy Tab"/>
          <Popularsample productname="Inifinix Spark Plug"/>
        </div>
      </div>
    </div>
  )
}

export default Popular
