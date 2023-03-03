import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        price: 2500,
        spec: {
            cpu: "13",
            gen: 13,
            ram: "8GB DDR4",
            hdd: "1TB"
        }
    }
]

const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers: {
        addLaptop: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (price, cpu, gen, ram, hdd) => {
                return {
                    payload: {
                        id: nanoid(),
                        price: price,
                        spec: {
                            cpu,
                            gen,
                            ram,
                            hdd
                        }
                    }
                }
            }
        }

    },
});
export const laptopSliceSelector = (store) => store.laptopSlice
export const { addLaptop } = laptopSlice.actions
export default laptopSlice.reducer