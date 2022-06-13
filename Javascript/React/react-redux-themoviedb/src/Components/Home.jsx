import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main'
import Navbar from './Navbar'

const api_key = 'd6ca859e565544668ce9853ec7cf1104'

const Home = () => {

    const [movies, setMovies] = useState('')
    const url = 'https://api.themoviedb.org/3/movie/550/lists?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US&page=1'
    
    useEffect(() => {
        setMovies()
    }, [])
    
    const getMovies = () => {
        axios.get(url).then((res) => {
            const allMovies = res.data
            setMovies(allMovies)
            // console.log(allMovies)
        }).catch((error)=> console.log(`Error: ${error}`))
    }
  return (
      <div>
          {/* {getMovies()} */}
          <Navbar />

          <Main movies={movies} />
    </div>
  )
}

export default Home