import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    isCounterVisible: false
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state){ state.count ++},
        decrement(state){ state.count --},
        restart(state){ state.count  = 0},
        increace(state, action) { state.count += action.payload},
        toggleCounter(state){ state.isCounterVisible = !state.isCounterVisible},
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterAction = counterSlice.actions;

export default store;

// const myReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CHANGE__COUNTER":
//             return {
//                 count: state.count + action.step,
//                 isCounterVisible: state.isCounterVisible
//             }
//         case "RESTART__COUNTER":
//             return {
//                 count: 0,
//                 isCounterVisible: state.isCounterVisible
//             }
//         case "TOGGLE__COUNTER":
//             return {
//                 count: state.count,
//                 isCounterVisible: !state.isCounterVisible
//             }
//         default:
//             return state;
//     }
// }


// const store = createStore(myReducer);


// import { legacy_createStore as createStore } from 'redux';

// const initialState = {
//     counter: 0,
//     isCounterShown: false
// }

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "CHANGE__COUNTER":
//             return { 
//                 counter: state.counter + action.step, 
//                 isCounterShown: state.isCounterShown
//             }
//         case "RESTART__COUNTER":
//             return { 
//                 counter: action.step , 
//                 isCounterShown: state.isCounterShown
//             }
//         case "TOGGLE__COUNTER":
//             return { 
//                 counter: state.counter, 
//                 isCounterShown: !state.isCounterShown 
//             }
//         default:
//             return state;
//     }
// };

// const store = createStore(counterReducer);

// export default store;


