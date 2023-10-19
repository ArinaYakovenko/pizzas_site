import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: []
};

export const counterSlice = createSlice({
    name: 'changeCount', 
    initialState, 
    reducers:{
        addPizza : (state) => {
            initialState.pizzas.push(state);
        }, 
    }
});

export const {addPizza} = counterSlice.actions;
export default counterSlice.reducer;