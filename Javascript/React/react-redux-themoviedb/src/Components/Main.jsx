import React from 'react'
import Movies from './Movies'
import Sidebar from './Sidebar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const Main = ({ movies }) => {
    return (
        <div className="flex">
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='' element={<Movies movies={movies} />} />
                </Routes>
                
            </BrowserRouter>
            
      </div>
      
  )
}

export default Main