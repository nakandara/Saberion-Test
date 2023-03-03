import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        price: 15000,
        cpu: "i3",
        ram: "8gb",
    },
    { id: 2, price: 35000, cpu: "i5", ram: "16gb" },
    {
        id: 3,
        price: 45000,
        cpu: "i7",
        ram: "16gb",
    },
    {
        id: 4,
        price: 55000,
        cpu: "i7",
        ram: "32gb",
    },
];

const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers: {
        addLaptop: (state, action) => {
            state.push(action.payload)

        }
    }
});

export const selectLaptop = (store)=>store.laptop
export const { addLaptop } = laptopSlice.actions
export default laptopSlice.reducer