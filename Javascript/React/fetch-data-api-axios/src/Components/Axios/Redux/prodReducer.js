import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        fetchProducts: (state, { payload }) => {
            return state = payload
        },
        deleteProducts: (state) => {
            return state = []
        }
    }
})

export const { fetchProducts, deleteProducts } = productsSlice.actions
export default productsSlice.reducer;