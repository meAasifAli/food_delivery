import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        verificationWindow: "signup",
        phone: null,
        otp: null,
        token: null,
        userData: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setAuthenticated(state,) {
            state.isAuthenticated = !state.isAuthenticated
        },
        setVerificationWindow(state, action) {
            state.verificationWindow = action.payload
        },
        setPhone(state, action) {
            state.phone = action.payload
        },
        setOtp(state, action) {
            state.otp = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setUserData(state, action) {
            state.userData = action.payload
        }
    }
})

export const { setUser, setAuthenticated, setVerificationWindow, setOtp, setPhone, setToken } = authSlice.actions;
export default authSlice.reducer;