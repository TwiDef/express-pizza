import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/sortSlice';

export default configureStore({
    reducer: {
        filter: filterSlice
    }
})