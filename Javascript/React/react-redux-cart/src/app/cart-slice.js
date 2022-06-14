import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // check if item already in cart
            const existsItem = state.itemsList.find((item) => item.id !== newItem.id)
            if (existsItem) {
                existsItem.quantity++
                existsItem.price.price = newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    rating:newItem.rating,
                    price: newItem.price,
                    category: newItem.category,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }
        },
        removeFromCart() {

        },
        setShowCart(state) {
            state.showCart = true
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice