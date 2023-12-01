import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /* addItem: (state, action) => {
            state.items.push(action.payload)
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price
            }, 0)
        }, */
        addItem: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price
            }, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)

        },
        clearItem: (state, action) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer