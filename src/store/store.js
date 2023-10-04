//store

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './productsSlice'; // Импорт редуктора

const store = configureStore({
  reducer: {
    products: cartReducer,
    
  },
});

export default store;
