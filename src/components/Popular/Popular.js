import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Laptop from './Laptop'
import Phones from './Phones'
import Gadgets from './Gadgets'
import Accessories from './Accessories'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

function Popular() {
  return (
    <div id="popular" className="blue-bg md:p-12 px-0 py-8 w-full">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="green-text text-2xl font-semibold leading-snug my-2">Popular Categories</h1>
        </div>
        <Tabs selectedTabClassName="active-popular" >
          {/* <NavLink activeClassName="active-popular" to="/laptop">
              <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">
                Laptops
            </li>
            </NavLink>
  */}
          <TabList className="flex flex-wrap justify-center mt-8 mb-5">
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Laptop</Tab>
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Phones & Tablets</Tab>
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Accessories</Tab>
            <Tab className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">Gadgets</Tab>
          </TabList>

          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
            <Laptop />
          </TabPanel>
          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
            <Phones />
          </TabPanel>
          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
            <Gadgets />
          </TabPanel>
          <TabPanel className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
            <Accessories />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Popular
