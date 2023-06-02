import { Fragment } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    const dispatchFunc = useDispatch();
    let counter = useSelector((state) => state.counter);
    let isCounterShown = useSelector((state) => state.isCounterShown);

    const incrementHandler = () => {
        dispatchFunc({ type: "CHANGE__COUNTER", step: 1 });
    }

    const decrementHandler = () => {
        dispatchFunc({ type: "CHANGE__COUNTER", step: -1 })
    }

    const plusTen = () => {
        dispatchFunc({ type: "CHANGE__COUNTER", step: 10 })
    }

    const restartHandler = () => {
        dispatchFunc({ type: "RESTART__COUNTER", step: 0 })
    }

    const toggleCounter = () => {
        dispatchFunc({ type: "TOGGLE__COUNTER" })
    }

    return (
        <div className="relative space-y-5 w-2/3 h-[500px] mt-10 mx-auto bg-blue-500 rounded-xl px-5 box-border">
            {
                isCounterShown
                    ? <div className="flex flex-col items-center justify-evenly h-[400px]">
                        <h1 className="text-[4rem] text-white">Counter</h1>
                        <div className="text-[4rem] text-white">{counter}</div>
                        <div className="flex justify-evenly items-center w-full font-bold">
                            <Button clickHandler={incrementHandler} title={'+'} />
                            <Button clickHandler={plusTen} title={'+10'} />
                            <Button clickHandler={decrementHandler} title={'-'} />
                            <Button clickHandler={restartHandler} title={'Restart'} />
                        </div>
                    </div>
                    : ""
            }
            <div className="absolute bottom-[20px] left-0 w-full text-center">
                <Button clickHandler={toggleCounter} title={'Show / Hide'} />
            </div>
        </div>
    );
}

export default Counter;