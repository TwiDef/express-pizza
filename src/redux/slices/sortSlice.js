import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sortType: { name: 'популярности', sortProperty: 'rating' },
    searchValue: ''
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
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer