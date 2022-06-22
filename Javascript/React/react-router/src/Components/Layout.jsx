import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BrandLink from './BrandLink'

const Layout = ({ brands }) => {
  return (
      <div>
          <nav>
              <h3>Filter by brand</h3>
              <ul>
                  <li>
                      <Link to ='/'>All</Link>
                  </li>
                  {brands.map((brand) => (
                      <li key={brand}>
                          <BrandLink brand={brand}>{brand}</BrandLink>
                      </li>
                  ))}
              </ul>
          </nav>
          <hr />
          <Outlet />
    </div>
  )
}

export default Layout