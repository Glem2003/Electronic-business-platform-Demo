import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.value += 1
        },
        removeItem: (state, action) => {
            state.value -= 1
        }
    }
})

export const { addItem ,removeItem} = shopSlice.actions;
export default shopSlice.reducer;