import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type TSearchPizzaParams = {
    category: string;
    searchBy: string;
    currentPage: number;
    sortBy: string;
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface IFetchAllPizzasArgs {
    category: string
    searchBy: string
    currentPage: number
    sortBy: string
}

type TPizzaItem = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

interface IAllPizzaSlice {
    items: TPizzaItem[];
    status: Status.LOADING | Status.SUCCESS | Status.ERROR
}

export const fetchPizzas = createAsyncThunk<TPizzaItem[], TSearchPizzaParams>('allPizzas/fetchPizzasStatus',
    async (params) => {
        const { category, searchBy, currentPage, sortBy } = params
        const { data } = await axios.get<TPizzaItem[]>(`https://6554f4a363cafc694fe74239.mockapi.io/items?${category}${searchBy}&limit=8&page=${currentPage}&sortBy=${sortBy}&order=desc`)

        return data
    })

const initialState: IAllPizzaSlice = {
    items: [],
    status: Status.LOADING
}

export const allPizzasSlice = createSlice({
    name: 'allPizzas',
    initialState,

    reducers: {

    },
    extraReducers: builder => {
        // fetch all pizzas
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const { } = allPizzasSlice.actions

export default allPizzasSlice.reducer