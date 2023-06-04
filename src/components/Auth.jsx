import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { userAuthAction } from "../store/userAuthSlice";


const Auth = () => {

    const dispatch = useDispatch();
    const userAuth = useSelector((state)=>state.auth.isUserLoggedIn);

    const logIn = () => {
        dispatch(userAuthAction.signIn());
    }

    console.log(userAuth);

    return (
        <div className="w-full mt-10 mx-auto max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
                </div>
                <div className="flex items-center justify-between">
                    <Button clickHandler={logIn} type={'button'} title={'Sign In'} />
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 ShelDM Corp. All rights reserved.
            </p>
        </div>
    );
}

export default Auth;