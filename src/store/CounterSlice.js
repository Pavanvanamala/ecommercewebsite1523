import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    sendItemsCart: (state, action) => {
      console.log('ppp',action.payload)
      return [...state, {...action.payload}];
    },
    removeItemsCart: (state,action) => {
    
         return state.filter((cartItem)=>cartItem.id!==action.payload.id)
    },


    increment : (state,action) => {
        const updatedCart= state.map((item)=>
         item.id===action.payload.id ? {...item,quantity : item.quantity + 1} : item
         )
         return updatedCart
    },
    decrement : (state,action) => {
       const updatedCart = state.map((item)=>
       item.id===action.payload.id ? {...item,quantity : item.quantity - 1} : item,
       )
       return updatedCart
    },

  },
});

export const { sendItemsCart, removeItemsCart,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;



















