import { legacy_createStore as createStore } from 'redux';

const initialState = {
    counter: 0,
    isCounterShown: false
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE__COUNTER":
            return { 
                counter: state.counter + action.step, 
                isCounterShown: state.isCounterShown
            }
        case "RESTART__COUNTER":
            return { 
                counter: action.step , 
                isCounterShown: state.isCounterShown
            }
        case "TOGGLE__COUNTER":
            return { 
                counter: state.counter, 
                isCounterShown: !state.isCounterShown 
            }
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;


