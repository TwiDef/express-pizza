import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import filterSlice from './slices/sortSlice';
import cartSlice from './slices/cartSlice';
import allPizzasSlice from './slices/allPizzasSlice';
import singlePizzaSlice from './slices/singlePizzaSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        allPizzas: allPizzasSlice,
        singlePizza: singlePizzaSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()