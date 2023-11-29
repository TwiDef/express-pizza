import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sortType: { name: 'популярности', sortProperty: 'rating' }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSortType: (state, action) => {
            state.sortType = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.currentPage = +(action.payload.currentPage)
            state.categoryId = +(action.payload.categoryId)
            state.sortType = action.payload.sortType
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer