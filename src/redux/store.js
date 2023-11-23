import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/sortSlice';

export default configureStore({
    reducer: {
        sort: sortReducer
    }
})