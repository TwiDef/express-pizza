import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    const { category, searchBy, currentPage, sortBy } = params
    const { data } = await axios.get(`https://6554f4a363cafc694fe74239.mockapi.io/items?${category}${searchBy}&limit=8&page=${currentPage}&sortBy=${sortBy}&order=desc`)
    return data
})

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,

    reducers: {

    },

    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
    }
})

export const { } = pizzaSlice.actions

export default pizzaSlice.reducer