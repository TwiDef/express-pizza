import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSinglePizza = createAsyncThunk('singlePizza/fetchSinglePizzaStatus', async (params) => {
    const { id } = params
    const { data } = await axios.get(`https://6554f4a363cafc694fe74239.mockapi.io/items/${id}`)
    return data
})

const initialState = {
    item: null,
    status: 'loading'
}

export const singlePizzaSlice = createSlice({
    name: 'singlePizza',
    initialState,

    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        }
    },
    extraReducers: builder => {
        // fetch singlePizza
        builder.addCase(fetchSinglePizza.pending, (state) => {
            state.status = 'loading'
            state.item = null
        })
        builder.addCase(fetchSinglePizza.fulfilled, (state, action) => {
            state.status = 'success'
            state.item = action.payload
        })
        builder.addCase(fetchSinglePizza.rejected, (state) => {
            state.status = 'error'
            state.item = null
        })
    }
})

export const { setStatus } = singlePizzaSlice.actions

export default singlePizzaSlice.reducer