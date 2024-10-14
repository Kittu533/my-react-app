 import {configureStore} from "@reduxjs/toolkit";
 import cartSlice from "./slices/cartSlices";

 const store = configureStore({
    reducer: {
        cart: cartSlice
    }
 });

 console.log("on create store : ", store.getState());

 store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
 });

 export default store;