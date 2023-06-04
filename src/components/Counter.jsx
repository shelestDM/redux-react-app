import { counterAction } from "../store/counterSclice";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";


const Counter = () => {


    const dispatchFunc = useDispatch();
    let counter = useSelector((state)=>state.counter.count)
    let isCounterShown = useSelector((state)=>state.counter.isCounterVisible)

    const incrementHandler = () => {
        dispatchFunc(counterAction.increment());
    }

    const decrementHandler = () => {
        dispatchFunc(counterAction.decrement())
    }

    const plusTen = () => {
        dispatchFunc(counterAction.increace(10))
    }

    const restartHandler = () => {
        dispatchFunc(counterAction.restart())
    }

    const toggleCounter = () => {
        dispatchFunc(counterAction.toggleCounter())
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