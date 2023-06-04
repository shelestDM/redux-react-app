import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSclice";
import userAuthSlice from "./userAuthSlice";

const store = configureStore({
    reducer:{
        counter:  counterSlice.reducer,
        auth: userAuthSlice.reducer
    }
});

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


