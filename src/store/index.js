import { configureStore } from '@reduxjs/toolkit';
import cartData from './CounterSlice'
import wishlistReducer from './WishlistSlice'

const store = configureStore({
  reducer: {
    user: cartData,
    wishlist: wishlistReducer,
  },
});

export default store;
