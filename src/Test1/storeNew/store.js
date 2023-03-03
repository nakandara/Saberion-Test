import { configureStore } from "@reduxjs/toolkit";
import laptopSliceReducer from "./reducers/laptopSlice";
import numberSliceReducer from "./reducers/numberSlice";

const store = configureStore({
    reducer: {
        numberSlice: numberSliceReducer,
        laptopSlice: laptopSliceReducer
    }
})
export default store