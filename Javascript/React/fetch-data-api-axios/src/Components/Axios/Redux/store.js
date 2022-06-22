import { configureStore } from '@reduxjs/toolkit'
import prodReducer from './prodReducer'
import catReducer from './catReducer'

const store = configureStore({
    reducer: {
        products: prodReducer,
        categories: catReducer
    }
})
export default store