import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/sortSlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzaSlice';
import singlePizzaSlice from './slices/singlePizzaSlice';

export default configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizza: pizzaSlice,
        singlePizza: singlePizzaSlice
    }
})