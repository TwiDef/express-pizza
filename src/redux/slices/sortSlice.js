import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        categoryId: 0
    },
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        }
    }
})

export const { setCategoryId } = sortSlice.actions

export default sortSlice.reducer