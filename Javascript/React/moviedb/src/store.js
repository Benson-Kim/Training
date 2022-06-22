import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './Features/Genres/genreSlice'

export default configureStore({
    reducer: {
        genres: genreReducer,
    },
})