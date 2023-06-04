import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    count: 0,
    isCounterVisible: false,
    isUserLogin: false
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state){ state.count ++},
        decrement(state){ state.count --},
        restart(state){ state.count  = 0},
        increace(state, action) { state.count += action.payload},
        toggleCounter(state){ state.isCounterVisible = !state.isCounterVisible},
    }
});

export const counterAction = counterSlice.actions;

export default counterSlice;