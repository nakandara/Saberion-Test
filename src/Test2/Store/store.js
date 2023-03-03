import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./reducers/CartSlice";
import laptopSliceReducer from "./reducers/laptopSlice";

const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    laptop: laptopSliceReducer,
  },
});
export default store;
