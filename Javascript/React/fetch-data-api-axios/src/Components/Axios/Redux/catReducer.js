import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        fetchProductCategory: (state, { payload }) => {
            return state = payload
        },
        deleteCatProducts: (state) => {
            return state = []
        }
    }
})

export const { fetchProductCategory, deleteCatProducts } = categorySlice.actions

export default categorySlice.reducer