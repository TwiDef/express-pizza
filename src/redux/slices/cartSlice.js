import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
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
            // recalculation of prices
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)

            // recalculation of prices
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        plusItem: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload)
            if (findItem) {
                findItem.count++
            }

            // recalculation of prices
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        minusItem: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload)
            if (findItem) {
                findItem.count--
            }

            // recalculation of prices
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        clearItems: (state, action) => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions

export default cartSlice.reducer