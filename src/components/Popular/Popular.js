import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Laptop from './Laptop'
import Phones from './Phones'
import Gadgets from './Gadgets'
import Accessories from './Accessories'

function Popular() {
  return (
    <div className="blue-bg md:p-12 px-0 py-8 w-full">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="green-text text-2xl font-semibold leading-snug my-2">Popular Categories</h1>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center mt-8 mb-5">
            <NavLink activeClassName="active-popular" to="/laptop">
              <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">
                Laptops
            </li>
            </NavLink>
            <NavLink activeClassName="active-popular" exact to="/">
              <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">
                Phones & Tablets
            </li>
            </NavLink>
            <NavLink activeClassName="active-popular" to="/accessories">
              <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">
                Accessories
            </li>
            </NavLink>
            <NavLink activeClassName="active-popular" to="/gadgets">
              <li className="w-40 md:w-48 m-2 lg:m-4 text-center cursor-pointer bg-white py-2">
                Gadgets
            </li>
            </NavLink>
          </ul>
        </div>

        <div className="grid sm:w-8/12 w-full md:w-full mx-auto gap-x-6 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-5">
          <Switch>
            <Route exact path="/laptop" component={Laptop} />
            <Route exact path="/gadgets" component={Gadgets} />
            <Route exact path="/" component={Phones} />
            <Route exact path="/accessories" component={Accessories} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Popular
