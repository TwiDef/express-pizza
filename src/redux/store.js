import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/sortSlice';
import cartSlice from './slices/cartSlice';
import allPizzasSlice from './slices/allPizzasSlice';
import singlePizzaSlice from './slices/singlePizzaSlice';

export default configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        allPizzas: allPizzasSlice,
        singlePizza: singlePizzaSlice
    }
})