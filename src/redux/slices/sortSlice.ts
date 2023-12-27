import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum SortPropertyEnum {
    RATING = 'rating',
    TITLE = 'title',
    PRICE = 'price'
}

export type TSortType = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export interface IFilterSlice {
    categoryId: number;
    currentPage: number;
    sortType: TSortType;
    searchValue: string;
}

const initialState: IFilterSlice = {
    categoryId: 0,
    currentPage: 1,
    sortType: { name: 'популярности', sortProperty: SortPropertyEnum.RATING },
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSortType: (state, action: PayloadAction<TSortType>) => {
            state.sortType = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action: PayloadAction<IFilterSlice>) => {
            state.currentPage = +(action.payload.currentPage)
            state.categoryId = +(action.payload.categoryId)
            state.sortType = action.payload.sortType
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer