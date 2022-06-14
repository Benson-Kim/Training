import React from 'react'
import Movies from './Movies'
import Sidebar from './Sidebar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const Main = ({ movies, getStars }) => {
    return (
        <div className="flex">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='' element={<Movies movies={movies} getStars={getStars} />} />
                </Routes>
                
            </BrowserRouter>
            
      </div>
      
  )
}

export default Main