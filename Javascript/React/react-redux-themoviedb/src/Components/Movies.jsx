import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'

const Movies = ({ movies, getStars }) => {
    // console.log(movies);

    return (
        <div className='bg-gray-900 grow'>
            <h2 className='capitalize text-slate-100 text-lg m-3'>Trending</h2>
            <div className='my-4 mx-8 grid grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {movies?movies.map((movie)=>(
                <Link to='' key={movie.id} className='rounded bg-inherit flex flex-wrap flex-col'>
                   {console.log(movie)}
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt=""
                        className='h-48 w-full rounded' />
                    <div className='w-full text-sm py-2'>
                        <p className='text-slate-200'>{movie.title}</p>
                        <span className='flex justify-between items-center'>
                            <p className='flex items-center gap-1 text-blue-700'>{getStars(movie.vote_average)}</p>
                            {/* <p className='flex items-center gap-1 text-blue-700'><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></p> */}
                            <h2 className='text-slate-200'>90 min</h2>
                        </span>
                    </div>
                </Link>
            )) : null }
                
            </div>
        </div>
    )
}

export default Movies