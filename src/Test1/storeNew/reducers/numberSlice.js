import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    number: 0,
    computer: [],
};
const reucerGen = (key = "number", operator = "+") => {
    if (operator === "+") {
        return (state, action) => {
            state[key] += action.payload;
        };
    } else if (operator === "-") {
        return (state, action) => {
            state[key] -= action.payload;
        };
    }
};

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        increment: reucerGen(),
        decrement: reucerGen('number', '-'),
    },
});
export const numberSliceSlector = (store) => store.numberSlice
export const { increment, decrement } = numberSlice.actions;
export default numberSlice.reducer;
