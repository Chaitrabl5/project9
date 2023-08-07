import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/login-slice'
import productReducer from '../features/products/product-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productReducer,
    auth:loginReducer
   
  },
});
