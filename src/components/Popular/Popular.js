import React, { useState } from 'react'
import Laptop from './Laptop'
import Phones from './Phones'
// import Gadgets from './Gadgets'
import Accessories from './Accessories'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Accessories2 from './Accessories2'

function Popular() {
const [viewMore, setViewMore] = useState(false)

  return (
    <div id="popular" className="blue-bg md:px-12 px-0 pt-8 pb-20 md:pb-12 w-full">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="green-text text-2xl font-semibold leading-snug my-2">Popular Categories</h1>
        </div>
        <Tabs selectedTabClassName="active-popular" className="relative" >
          <TabList className="flex flex-wrap justify-center mt-8 mb-5">
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Laptop</Tab>
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Phones & Tablets</Tab>
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Accessories</Tab>
            {/* <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Gadgets</Tab> */}
          </TabList>

          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-4 md:px-0">
            <Laptop />
          </TabPanel>
          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-4 md:px-0">
            <Phones />
          </TabPanel>
          <TabPanel className=" grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-4 md:px-0">
            <Accessories />
            <Accessories2 view={viewMore}/>
            <button className={viewMore ? "hidden" : " md:absolute right-0 bottom-0 viewMore text-white py-2 px-12 border outline-none bg-greeen text-orange font-normal"} onClick={() => setViewMore(true)}>View More</button>
          </TabPanel>
          {/* <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 m-5">
            <Gadgets />
          </TabPanel> */}
        </Tabs>
      </div>
    </div>
  )
}

export default Popular
