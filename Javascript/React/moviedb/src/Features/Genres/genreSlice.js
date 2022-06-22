import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d6ca859e565544668ce9853ec7cf1104&language=en-US'

const initialState = {
    value: '',
}

export const getGenres = createAsyncThunk(
    'genres/getGenres',
    async (name, thunkAPI) => {
        try {
            const res = await axios(url)
            return  res.data.genres
            // console.log(res.data.genres);
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        
    },
})

export default genreSlice.reducer

export const selectAllGenres = (state) => state.genres.genres

export const selectGenreById = (state, genreId) =>
    state.genres.genres.find((genre) => genre.id === genreId)