import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    isUserLoggedIn: false
};

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: initialUserState,
    reducers: {
        signIn(state){state.isUserLoggedIn = true},
        signOut(state){state.isUserLoggedIn = false}
    }
})


export const userAuthAction = userAuthSlice.actions;

export default userAuthSlice;
