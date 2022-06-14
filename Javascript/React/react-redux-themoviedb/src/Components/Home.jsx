import React, { useEffect, useState } from 'react'
// import { IoStar, IoStarHalf } from 'react-icons/io'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import axios from 'axios'
import Main from './Main'
import Navbar from './Navbar'

// const api_key = 'd6ca859e565544668ce9853ec7cf1104'

const Home = () => {

  const [movies, setMovies] = useState('')
  const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d6ca859e565544668ce9853ec7cf1104'

  useEffect(() => {
    axios.get(url)
      .then(res => setMovies(res.data.results))
  }, [])

  const getStars = (rating) => {

    // Round to nearest half
    rating = Math.round(rating / 2);
    let output = [];
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push(<BsStarFill className='text-blue-700 ' /> );

    // If there is a half a star, append it
    if (i == .5) output.push(<BsStarHalf className='text-blue-700' />);

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push(<BsStar className='text-blue-700' />);

    return output

  }



  return (
    <div>
      <Navbar />

      <Main movies={movies} getStars={getStars} />
    </div>
  )
}

export default Home